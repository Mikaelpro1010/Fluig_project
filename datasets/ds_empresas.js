function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	var dataset = DatasetBuilder.newDataset();

    dataset.addColumn("codigo");
    dataset.addColumn("nome");

    dataset.addRow(["1", "Empresa Alpha"]);
    dataset.addRow(["2", "Empresa Beta"]);
    dataset.addRow(["3", "Empresa Gamma"]);

    return dataset;

}function onMobileSync(user) {

}