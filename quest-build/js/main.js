var main = (function () {
'use strict';

const createElement = (template) => {
    const outer = document.createElement(`div`);
    outer.innerHTML = template;
    return outer;
};

const main = document.getElementById(`main`);

const changeView = (view) => {
    main.innerHTML = ``;
    main.appendChild(view.element);
};

const initialGame = {
  level: 0,
  lives: 3,
  time:0  
};

const setLives = (game, lives) => {
    if ( lives < 0 ) {
        throw new RangeError(`Can't set negative lives`);
    } 
    game = Object.assign({}, game);
    game.lives = lives;
    return game;
};

const getLevel = (num, quest) => quest[`level-${num}`];

const nextLevel = (state, quest) => {
    const next = state.level + 1;
    if (!getLevel(next, quest)) {
        throw new RangeError(`Can't find level ${next}`);
    }
    state = Object.assign({}, state);
    state.level = next;
    return state;
};



const Result = {
    DIE: `die`,
    NOOP: `noop`,
    NEXT: `next`,
    WIN: `win`
};

class AbstractView {

    get template() {
        throw new Error(`You have to define template for view`);
    }

    render() {
        return createElement(this.template);
    }

    bind() {

    }

    get element() {
        if (!this._element) {
            this._element = this.render();
            this.bind();
        }
        return this._element;
    }

}

const ENTER_KEYCODE = 13;

const drawHeart = (full) => {
    return `<span class="Heart__${(full ? `full` : `empty`)}">${full ? `&#9829;` : `&#9825;`}</span>`;
};

const drawHeader = (data) => {
    return `
    <header class="header">
    <div>Мир: ${data.level}</div>
    <div>
    Жизни: ${drawHeart(data.lives > 2)}
          ${drawHeart(data.lives > 1)}
          ${drawHeart(data.lives > 0)}
    </div>
    <div>Время: ${data.time}</div>
</header>`
};

class LevelView extends  AbstractView {
    constructor(state, model) {
        super();
        this.state = state;
        this.model = model;
    }
    
    get template() {
        const level = getLevel(this.state.level, this.model);
        
        const answerNames = Object.keys(level.answers);
        const answers = answerNames.map((key) => ({key, value: level.answers[key]}));
        
        return `
        ${drawHeader(this.state)}
        <div class="quest">
            <p class="text">${level.text}</p>
            <input type="text">
            <ul class="answers">
            ${answers.map(({key, value}) => `<li class="answer">${key}. ${value.description}</li>`).join(``)}
            </ul>
        </div>
        <small>Для справки введите <i>help</i></small>`.trim();
    }
    
    bind() {
        const input = this.element.querySelector(`input`);
        input.onkeydown = (evt) => {
            if (evt.keyCode === ENTER_KEYCODE) {
                const level = getLevel(this.state.level, this.model);
                const answer = level.answers[input.value.toUpperCase()];
                
                if (answer) {
                    this.onAnswer(answer);
                }
            }
        };
    }
    
    onAnswer(answer) {
        return answer;
    }
    
    updateTimer(time) {
        const timerContainer = this.element.querySelector(`header div:last-child`);
        timerContainer.textContent = `Время: ${time}`;
    }
}

class GameOverView extends AbstractView {
    constructor(isWin) {
        super();
        this.isWin = isWin;
    }

    get template() {
        let message;
        if (this.isWin) {
            message = `<p>УРА</p><p>ПОБЕДА</p>`;
        } else {
            message = `<p>КОНЕЦ!</p><p>ПОВТОРИМ?</p>`;
        }
        return `
        <div class="end">
        ${message.trim()}
        <div class="repeat">
            <span class="repeat-action">Да</span>|<span class="repeat-action">Нет</span>
            </div>
        </div>`;
    }

    bind() {
        this.element.querySelector(`span.repeat-action`).onclick = (evt) => {
            evt.preventDefault();

            this.onRepeat();
        };
    }

    onRepeat() {}

}

class DefaultAdapter {
    constructor() {
        if (new.target === DefaultAdapter) {
            throw new Error();
        }
    }

    preprocess(data) {
        return data;
    }

    toServer(data) {
        return data;
    }
}


const defaultAdapter = new class extends DefaultAdapter {}();


class Model {
    get urlRead() {
        throw new Error(`Abstract method. Define the URL for model.`);
    }

    get urlWrite() {
        throw new Error(`Abstract method. Define the URL for model.`);
    }

    load(adapter = defaultAdapter) {
        return fetch(this.urlRead)
            .then((resp) => resp.json())
            .then(adapter.preprocess);
    }

    send(data, adapter = defaultAdapter) {
        const requestSettings = {
            body: adapter.toServer(data),
            headers: {
                'Content-Type': `application/json`
            },
            method: `POST`
        };

        return fetch(this.urlWrite, requestSettings)
            .then(this.onUpload);
    }
}

const preprocessAnswers = (answers) => {
    const answersObj = {};

    answers.forEach((answer) => {
        const splitAction = answer.action.split(`.`);
        answersObj[splitAction[0]] = {
            'description': splitAction[1],
            'result': answer.result
        };
    });
    return answersObj;
};

var QuestAdapter = new class extends DefaultAdapter {
    preprocess(data) {
        const preprocessed = {};
        Object.keys(data).forEach((it, i) => {
            preprocessed[`level-${i}`] = {
                text: data[it].text,
                answers: preprocessAnswers(data[it].answers)
            };
        });

        return preprocessed;
    }

    toServer(data) {
        return JSON.stringify(data);
    }
}();

class Game {
    constructor(model, quest) {
        this.model = model;
        this.quest = quest;
    }

    init() {
        this.changeLevel(initialGame);
    }

    get view() {
        return this._view;
    }

    set view(view) {
        this._view = view;
        changeView(view);
    }

    changeLevel(state) {
        this.state = state;
        this.view = new LevelView(this.state, this.quest);
        this.tickTimer();

        this.view.onAnswer = (answer) => {
            this.stopTimer();

            switch (answer.result) {
                case Result.DIE:
                    this.die();
                    break;

                case Result.WIN:
                    this.win();
                    break;

                case Result.NEXT:
                    this.changeLevel(nextLevel(this.state, this.quest));
                    break;

                default:
                    throw new Error(`Unknown result ${answer.result}`);
            }
        };
    }

    tickTimer() {
        this.state = Object.assign({}, this.state, {
            time: this.state.time + 1
        });
        this.view.updateTimer(this.state.time);

        this.timeout = setTimeout(() => this.tickTimer(), 1000);
    }

    stopTimer() {
        clearTimeout(this.timeout);
    }

    die() {
        this.view = new GameOverView(false);
        this.view.onRepeat = () => {
            this.changeLevel(setLives(this.state, this.state.lives - 1));
        };
    }

    win() {
        this.model.send(this.state, QuestAdapter).then(() => {
            this.view = new GameOverView(true);
            this.view.onRepeat = () => {
                this.changeLevel(initialGame);
            };
        });
    }
}

class SplashScreen extends AbstractView {
    constructor() {
        super();
        this.cursor = 0;
        this.symbolsSeq = `/—\\|`;
    }

    get template() {
        return `<div></div>`;
    }

    start() {
        this.cursor = ++this.cursor >= this.symbolsSeq.length ? 0 : this.cursor;
        this.element.textContent = this.symbolsSeq[this.cursor];
        this.timeout = setTimeout(() => this.start(), 50);
    }

    hide() {
        clearTimeout(this.timeout);
    }
}

const ENTER_KEYCODE$1 = 13;
const START_COMMAND = `start`;

class WelcomeView extends AbstractView {

    get template() {
        return `
        <div class="quest">
        <p class="title">К В Е С Т</p>
        <p class="text">Это игра, где вы — главное действующее лицо. И от ваших действий зависит успех и победа в этой игре.</p>
        <p class="text">Набери в поле ввода <b>${START_COMMAND}</b>, чтобы начать игру!"</p>
        <input type="text">
</div>`.trim();
    }

    bind() {
        const input = this.element.querySelector(`input`);
        input.onkeydown = (evt) => {
            if (evt.keyCode === ENTER_KEYCODE$1) {
                const value = input.value || ``;
                if (value.toLocaleLowerCase() === START_COMMAND) {
                    this.onStart();
                }
            }
        };
    }

    onStart() {}
}

class Welcome {
    constructor() {
        this.view = new WelcomeView();
    }

    init() {
        App$1.showWelcome();
        changeView(this.view);

        this.view.onStart = () => {
            App$1.showGame();
        };
    }
}

const ControllerID = {
    WELCOME: ``,
    GAME: `game`,
    WIN: `die`,
    DIE: `win`,
};


const getControllerIDFromHash = (hash) => hash.replace(`#`, ``);


class App {
    constructor() {
        const preloaderRemove = this.showPreloader();

        this.model = new class extends Model {
            get urlRead() {
                return `https://intensive-ecmascript-server-srmhvdwcks.now.sh/text-quest/quest`;
            }

            get urlWrite() {
                return `true`;
            }
        }();

        this.model.load(QuestAdapter)
            .then((data) => this.setup(data))
            .then(preloaderRemove)
            .then(() => this.changeController(getControllerIDFromHash(location.hash)))
            .catch(window.console.error);
    }

    setup(data) {
        this.routes = {
            [ControllerID.WELCOME]: new Welcome(),
            [ControllerID.GAME]: new Game(this.model, data)
        };

        window.onhashchange = () => {
            this.changeController(getControllerIDFromHash(location.hash));
        };
    }

    changeController(route = ``) {
        this.routes[route].init();
    }

    showPreloader() {
        const splashScreen = new SplashScreen();
        changeView(splashScreen);
        splashScreen.start();

        return () => splashScreen.hide();
    }

    showWelcome() {
        location.hash = ControllerID.WELCOME;
    }

    showGame() {
        location.hash = ControllerID.GAME;
    }
}

var App$1 = new App();

return App$1;

}());

//# sourceMappingURL=main.js.map
