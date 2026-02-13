function displayFields(form, customHTML) {

    var atividadeAtual = parseInt(getValue("WKNumState"), 10);
    form.setValue('atividadeAtual', atividadeAtual);

    var solicitacaoInscricaoFields = ["nome", "email", "idade", "estadoCivil"];
    var validacaoRHFields = ["observacao", "dadosCorretos"];

    // var user = getValue("WKUser");
    // form.setValue('nome', user);

    var user = getValue("WKUser");

    var c1 = DatasetFactory.createConstraint(
        "colleaguePK.colleagueId",
        user,
        user,
        ConstraintType.MUST
    );

    var dataset = DatasetFactory.getDataset("colleague", null, [c1], null);

    if (dataset && dataset.rowsCount > 0) {

        var nomeUsuario = dataset.getValue(0, "colleagueName");
        var emailUsuario = dataset.getValue(0, "mail");

        form.setValue("nome", nomeUsuario);
        form.setValue("email", emailUsuario);
    }


    // funcao para desabilitar campos
    function disableFields(fieldsArray) {
        for (var i = 0; i < fieldsArray.length; i++) {
            form.setEnabled(fieldsArray[i], false);
        }
    }

    function listDependentes() {

        var indexes = form.getChildrenIndexes("dependentes");

        var resumoTexto = "";


        for (var i = 0; i < indexes.length; i++) {

            var nome = form.getValue("nomeDependente___" + indexes[i]);
            var idade = form.getValue("idadeDependente___" + indexes[i]);

            if (nome && nome.trim() !== "") {
                resumoTexto += "Nome - " + nome + " | Idade - " + idade + "\n";
            }
        }

        form.setValue("resumoDependentes", resumoTexto);

        var listaHTML = "<pre>" + resumoTexto + "</pre>";

        customHTML.append("<script>$('#listaDependentes').html(`" + listaHTML + "`);</script>");
    }

    if (atividadeAtual === 0) {

        form.setVisibleById('validacao_rh', false);
        form.setVisibleById('finalizar_inscricao', false);
        form.setEnabled('nome', false);
        form.setEnabled('email', false);
        customHTML.append("<script>$(function(){$('#validacao_rh,#finalizar_inscricao').hide();});</script>");

    }
    else if (atividadeAtual === 5) {

        listDependentes();

        form.setVisibleById('finalizar_inscricao', false);
        customHTML.append("<script>$(function(){$('#finalizar_inscricao').hide();});</script>");

        disableFields(solicitacaoInscricaoFields);
    }
    else if (atividadeAtual === 12) {

        listDependentes();

        disableFields(solicitacaoInscricaoFields);
        disableFields(validacaoRHFields);
    }
}
