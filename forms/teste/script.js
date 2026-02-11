
$(document).ready(function () {

    $("#formCadastro").on("submit", function (e) {
        e.preventDefault(); // impede reload da página

        var nome = $("#nome").val();
        var email = $("#email").val();
        var idade = $("#idade").val();
        var estadoCivil = $("input[name='estadoCivil']:checked").val();

        console.log("Nome:", nome);
        console.log("Email:", email);
        console.log("Idade:", idade);
        console.log("Estado Civil:", estadoCivil);

        if (!estadoCivil) {
            FLUIGC.toast({
                title: 'Atenção: ',
                message: 'Selecione o estado civil.',
                type: 'warning'
            });
            return;
        }

        var dadosCorretos = $("input[name='dadosCorretos']:checked").val();

        if (!dadosCorretos) {
            FLUIGC.toast({
                title: 'Atenção: ',
                message: 'Selecione se os dados estão corretos.',
                type: 'warning'
            });
            return;
        }

        FLUIGC.toast({
            title: 'Sucesso: ',
            message: 'Formulário enviado com sucesso!',
            type: 'success'
        });

    });

});