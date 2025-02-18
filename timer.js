class TimerClass {
    constructor() {
      this.hora = '00';
      this.minuto = '00';
      this.segundo = '00';
      this.seconds = 0; // Variável para armazenar o tempo em segundos
      this.timerInterval = null; // Intervalo para controle
    }
  
    start() {
      if (this.timerInterval) return; // Impede múltiplos intervalos
      this.timerInterval = setInterval(() => this.updateTimer(), 1000); // Inicia o timer
    }
  
    stop() {
      clearInterval(this.timerInterval); // Interrompe o intervalo
      this.timerInterval = null;
    }
  
    updateTimer() {
      this.seconds++;
      this.hora = String(Math.floor(this.seconds / 3600)).padStart(2, '0');
      this.minuto = String(Math.floor((this.seconds % 3600) / 60)).padStart(2, '0');
      this.segundo = String(this.seconds % 60).padStart(2, '0');
      document.getElementById('timer').innerText = `${this.hora}:${this.minuto}:${this.segundo}`;
    }
  }
  
  export default TimerClass;
      