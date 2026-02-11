function displayFields(form, customHTML) {
    var atividadeAtual = getValue("WKNumState");

    form.setValue('atividadeAtual', atividadeAtual);


    if (atividadeAtual == 0) {

        form.setVisibleById('validacao_rh', false);
        form.setVisibleById('finalizar_inscricao', false);

    }

    if (atividadeAtual == 12) {

        form.setVisibleById('finalizar_inscricao', false);

    }

}