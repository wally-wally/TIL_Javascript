class BaseballGame {
  constructor(id) {
    this.id = id;
    this.resultContainerEl = 
      document.querySelector('.result-container')
    this.guessEl = document.getElementById('guess');
  }

  async init() {
    try {
      const guessLabel = document.getElementById('guess-label');
      const res = await fetch(`api/game/${this.id}`);
      const v = await res.json();
      this.digit = v.digit;
      this.history = v.history;
      this.done = v.done;
      this.history.forEach(({ guess, result }) =>
        this.renderResults(guess, result));
      if (this.done) { this.makeEnd(); }
      guessLabel.innerHTML += ` (${this.digit}자리)`;
      this.bindEvent();
      return this;
    } catch (err) {
      alert(err);
    }
  }
  
  bindEvent() {   
    this.guessEl.addEventListener('keypress', async e => {
      const guess = e.target.value;
      if (e.keyCode === 13) {
        const res = await this.askResult(guess)
        this.renderResults(guess, res.result);
        if (res.done) {
          res.done = this.done;
          this.makeEnd();
        }
        this.guessEl.value = '';
      }
    });
  }

  async askResult(guess) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const res = await fetch(`api/game/${this.id}/guess`, {
      method: 'POST',
      body: JSON.stringify({ guess }),
      headers
    });

    if (res.status === 400) {
      const { message } = await res.json()
      alert(message);
      throw new Error(message);
    } else {
      return res.json();
    }
  }

  renderResults(guess, result) {
    this.resultContainerEl.insertAdjacentHTML(
      'beforeend', 
      `<li class="list-group-item">
        <span class="guess">${guess}</span>
        <span class="badge result">${result}</span>
      </li>`);
  }

  makeEnd() {
    this.guessEl.disabled = true;
    this.guessEl.placeholder = '정답을 맞추었습니다.'      
  }
}