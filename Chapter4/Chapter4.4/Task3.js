let ladder = {
  step: 0,
  
  up() {
    this.step++;
	return this; //возвращаем сам объект
  },
  
  down() {
    this.step--;
	return this; //возвращаем сам объект
  },
  
  showStep: function() { // показывает текущую ступеньку
    console.log(this.step);
	return this; //возвращаем сам объект
  },
  
};

ladder.up().up().down().showStep().down().showStep();