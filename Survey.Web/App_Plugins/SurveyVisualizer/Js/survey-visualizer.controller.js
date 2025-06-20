angular.module("umbraco").controller("SurveyVisualizer", function ($scope, editorState) {
    var vm = this;

    if (editorState.current.variants.find(item => item.name === "Measles Immunity Check")) {
        vm.ImageToDisplay = "/App_Plugins/SurveyVisualizer/Images/MeaslesDiagram.svg";
    } else {
        vm.ImageToDisplay = "/App_Plugins/SurveyVisualizer/Images/ProfessionAdvisor.svg";
    }
});