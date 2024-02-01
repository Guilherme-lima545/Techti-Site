
$('.slider-principal').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });

  $('.slider-sobre nos').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });



  class FormSubmit {
    constructor (settings) {
      this.settings = settings;
      this.form = document.querySelector (settings.form);
      this.formButton = document.querySelector(settings.button);
      if (this.form) {
        this.url = this.form.getAttribute("action");
      }
    }
  }

  displaySuccess(); {
    this.form.innerHTML = this.settings.success;
  }

  displayError(); {
    this.form.innerHTML = this.settings.error;
  }
   
  init(); {
    if (this.form) this.formButton.addEventListener("click", () => this.displaySuccess());
    return this
  }
    

  const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='success'> Mensagem enviada com sucesso! </h1>"
    error: "<h1 class='error'>Não foi possivel enviar sua mensagem.</h1>"
  })
  formSubmit.init();