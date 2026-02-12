function displayFields(form, customHTML) {

    var atividadeAtual = parseInt(getValue("WKNumState"), 10);
    form.setValue('atividadeAtual', atividadeAtual);

    var solicitacaoInscricaoFields = ["nome", "email", "idade", "estadoCivil"];
    var validacaoRHFields = ["observacao", "dadosCorretos"];


    // funcao para desabilitar campos
    function disableFields(fieldsArray) {
        for (var i = 0; i < fieldsArray.length; i++) {
            form.setEnabled(fieldsArray[i], false);
        }
    }

    if (atividadeAtual === 0) {

        form.setVisibleById('validacao_rh', false);
        form.setVisibleById('finalizar_inscricao', false);

        customHTML.append("<script>$(function(){$('#validacao_rh,#finalizar_inscricao').hide();});</script>");

    } 
    else if (atividadeAtual === 5) {

        form.setVisibleById('finalizar_inscricao', false);
        customHTML.append("<script>$(function(){$('#finalizar_inscricao').hide();});</script>");

        disableFields(solicitacaoInscricaoFields);
    } 
    else if (atividadeAtual === 12) {

        disableFields(solicitacaoInscricaoFields);
        disableFields(validacaoRHFields);
    }
}
