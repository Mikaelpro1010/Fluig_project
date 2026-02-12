$(document).ready(function () {

    $("#formCadastro").on("submit", function (e) {
        e.preventDefault();

        var atividadeAtual = parseInt($("#atividadeAtual").val());

        if (atividadeAtual === 0) {

            var nome = $("#nome").val().trim();
            var email = $("#email").val().trim();
            var idade = $("#idade").val().trim();
            var estadoCivil = $("input[name='estadoCivil']:checked").val();


            if (!nome) {
                FLUIGC.toast({
                    title: 'Atenção: ',
                    message: 'É obrigatório preencher o nome.',
                    type: 'warning'
                });
                return;
            }

            if (!email) {
                FLUIGC.toast({
                    title: 'Atenção: ',
                    message: 'É obrigatório preencher o email.',
                    type: 'warning'
                });
                return;
            }

            if (!idade) {
                FLUIGC.toast({
                    title: 'Atenção: ',
                    message: 'É obrigatório preencher a idade.',
                    type: 'warning'
                });
                return;
            }


            if (!estadoCivil) {
                FLUIGC.toast({
                    title: 'Atenção: ',
                    message: 'Selecione o estado civil.',
                    type: 'warning'
                });
                return;
            }

            if (idade <= 0) {
                FLUIGC.toast({
                    title: 'Atenção: ',
                    message: 'A idade não pode ser negativa ou 0.',
                    type: 'warning'
                });
                return;
            }
        }


        // Só valida RH se estiver na etapa 10
        if (atividadeAtual === 10) {

            var dadosCorretos = $("input[name='dadosCorretos']:checked").val();

            if (!dadosCorretos) {
                FLUIGC.toast({
                    title: 'Atenção: ',
                    message: 'Selecione se os dados estão corretos.',
                    type: 'warning'
                });
                return;
            }
        }

        if (atividadeAtual === 12) {
            var matricula = $("#matricula").val().trim();
            var empresa = $("#empresa").val().trim();
            var setor = $("#setor").val().trim();

            if(!matricula) {
                FLUIGC.toast({
                    title: 'Atenção: ',
                    message: 'É obrigatório preencher a matrícula.',
                    type: 'warning'
                });
                return;
            }

            if(!empresa) {
                FLUIGC.toast({
                    title: 'Atenção: ',
                    message: 'É obrigatório preencher a empresa.',
                    type: 'warning'
                });
                return;
            }

            if(!setor) {
                FLUIGC.toast({
                    title: 'Atenção: ',
                    message: 'É obrigatório preencher o setor.',
                    type: 'warning'
                });
                return;
            }
        }


        FLUIGC.toast({
            title: 'Sucesso: ',
            message: 'Formulário enviado com sucesso!',
            type: 'success'
        });

    });

});
