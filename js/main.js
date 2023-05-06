$(document).ready(function(){
    $('#carrossel-imagens').slick({
        autoplay: true,
    })

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle()
    })

    $('#telefone').mask('(00) 00000-0000',{placeholder:'(__)_____-____'})


    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoDeInteresse: {
                required: false
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome',
            email: 'Por favor, insira seu e-mail',
            telefone: 'Por favor, insira seu numero'
        }, 
        submitHandler: function() {
            console.log(form)
        }, 
        invalidHandler: function(evento, validador) {
            let campoIncorretos = validador.numberOfInvalids()
            console.log(campoIncorretos)
        }
    })



    $('.lista-veiculos button').click(function(){
        const destino = $('#contato')

        const nomeVeiculo = $(this).parent().find('h3').text()

        $('#veiculo-interesse').val(nomeVeiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })


})

$('#formulario').submit(function(event){
    event.preventDefault()
    alert('formulario enviado')
    
    $('#nome').val('')
    $('#telefone').val('')
    $('#email').val('')
    $('#veiculo-interesse').val('')
    $('#mensagem').val('')

})
