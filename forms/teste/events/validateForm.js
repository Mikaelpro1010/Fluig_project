function validateForm(form) {

    var atividadeAtual = parseInt(getValue("WKNumState"), 10);

    function isEmpty(value) {
        return value === null || value === undefined || String(value).trim() === "";
    }

    function requireField(fieldName, message){
        if (isEmpty(form.getValue(fieldName))) {
            throw message;
        }
    }

    if (atividadeAtual === 4) {

        requireField("nome", "Informe o nome."); 
        requireField("email", "Informe o email."); 
        requireField("idade", "Informe o idade."); 
        requireField("estadoCivil", "Informe o estadoCivil."); 


    } else if (atividadeAtual === 5) {

        requireField("dadosCorretos", "Informe se os dados estão corretos.");

    } else if (atividadeAtual === 12) {
        
        requireField("matricula", "Informe a matricula."); 
        requireField("empresa", "Informe a empresa."); 
        requireField("setor", "Informe o setor."); 
        
    }
}
