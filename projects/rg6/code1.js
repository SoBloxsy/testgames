gdjs.introCode = {};
gdjs.introCode.GDbackgroundObjects1= [];
gdjs.introCode.GDbackgroundObjects2= [];
gdjs.introCode.GDrhythmObjects1= [];
gdjs.introCode.GDrhythmObjects2= [];
gdjs.introCode.GDantiVirusObjects1= [];
gdjs.introCode.GDantiVirusObjects2= [];
gdjs.introCode.GDplayObjects1= [];
gdjs.introCode.GDplayObjects2= [];
gdjs.introCode.GDrechargeAntiVirusObjects1= [];
gdjs.introCode.GDrechargeAntiVirusObjects2= [];
gdjs.introCode.GDinterfaceRotatingElementObjects1= [];
gdjs.introCode.GDinterfaceRotatingElementObjects2= [];
gdjs.introCode.GDrhythmBackgroundObjects1= [];
gdjs.introCode.GDrhythmBackgroundObjects2= [];
gdjs.introCode.GDrhythmBackgroundGreenObjects1= [];
gdjs.introCode.GDrhythmBackgroundGreenObjects2= [];
gdjs.introCode.GDplayerObjects1= [];
gdjs.introCode.GDplayerObjects2= [];
gdjs.introCode.GDplayerThrusterObjects1= [];
gdjs.introCode.GDplayerThrusterObjects2= [];
gdjs.introCode.GDplayerBulletObjects1= [];
gdjs.introCode.GDplayerBulletObjects2= [];
gdjs.introCode.GDenemyObjects1= [];
gdjs.introCode.GDenemyObjects2= [];
gdjs.introCode.GDbonusPointTextObjects1= [];
gdjs.introCode.GDbonusPointTextObjects2= [];
gdjs.introCode.GDcomboTextObjects1= [];
gdjs.introCode.GDcomboTextObjects2= [];
gdjs.introCode.GDscoreTextObjects1= [];
gdjs.introCode.GDscoreTextObjects2= [];
gdjs.introCode.GDexplosionObjects1= [];
gdjs.introCode.GDexplosionObjects2= [];
gdjs.introCode.GDconsoleObjects1= [];
gdjs.introCode.GDconsoleObjects2= [];
gdjs.introCode.GDexplosionCenterObjects1= [];
gdjs.introCode.GDexplosionCenterObjects2= [];
gdjs.introCode.GDenemySpawnPointObjects1= [];
gdjs.introCode.GDenemySpawnPointObjects2= [];
gdjs.introCode.GDsmallArrowObjects1= [];
gdjs.introCode.GDsmallArrowObjects2= [];
gdjs.introCode.GDclickHereObjects1= [];
gdjs.introCode.GDclickHereObjects2= [];
gdjs.introCode.GDshieldMeterObjects1= [];
gdjs.introCode.GDshieldMeterObjects2= [];
gdjs.introCode.GDshieldTextObjects1= [];
gdjs.introCode.GDshieldTextObjects2= [];
gdjs.introCode.GDshieldGaugeOutlineObjects1= [];
gdjs.introCode.GDshieldGaugeOutlineObjects2= [];
gdjs.introCode.GDshieldGaugeBackgroundObjects1= [];
gdjs.introCode.GDshieldGaugeBackgroundObjects2= [];
gdjs.introCode.GDinterfaceOutlineObjects1= [];
gdjs.introCode.GDinterfaceOutlineObjects2= [];
gdjs.introCode.GDcountdownObjects1= [];
gdjs.introCode.GDcountdownObjects2= [];
gdjs.introCode.GDfaderObjects1= [];
gdjs.introCode.GDfaderObjects2= [];
gdjs.introCode.GDfailedSuccessTextObjects1= [];
gdjs.introCode.GDfailedSuccessTextObjects2= [];
gdjs.introCode.GDmenuButtonObjects1= [];
gdjs.introCode.GDmenuButtonObjects2= [];
gdjs.introCode.GDmenuButtonTextObjects1= [];
gdjs.introCode.GDmenuButtonTextObjects2= [];
gdjs.introCode.GDenemyCountObjects1= [];
gdjs.introCode.GDenemyCountObjects2= [];
gdjs.introCode.GDstarsObjects1= [];
gdjs.introCode.GDstarsObjects2= [];
gdjs.introCode.GDtitleObjects1= [];
gdjs.introCode.GDtitleObjects2= [];

gdjs.introCode.conditionTrue_0 = {val:false};
gdjs.introCode.condition0IsTrue_0 = {val:false};
gdjs.introCode.condition1IsTrue_0 = {val:false};
gdjs.introCode.condition2IsTrue_0 = {val:false};
gdjs.introCode.conditionTrue_1 = {val:false};
gdjs.introCode.condition0IsTrue_1 = {val:false};
gdjs.introCode.condition1IsTrue_1 = {val:false};
gdjs.introCode.condition2IsTrue_1 = {val:false};
gdjs.introCode.conditionTrue_2 = {val:false};
gdjs.introCode.condition0IsTrue_2 = {val:false};
gdjs.introCode.condition1IsTrue_2 = {val:false};
gdjs.introCode.condition2IsTrue_2 = {val:false};


gdjs.introCode.mapOfGDgdjs_46introCode_46GDfaderObjects1Objects = Hashtable.newFrom({"fader": gdjs.introCode.GDfaderObjects1});
gdjs.introCode.eventsList0 = function(runtimeScene) {

{


gdjs.introCode.condition0IsTrue_0.val = false;
{
gdjs.introCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.introCode.condition0IsTrue_0.val) {
gdjs.introCode.GDfaderObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.introCode.mapOfGDgdjs_46introCode_46GDfaderObjects1Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.introCode.GDfaderObjects1.length ;i < len;++i) {
    gdjs.introCode.GDfaderObjects1[i].getBehavior("Tween").addObjectOpacityTween("disappear", 0, "linear", 1000, false);
}
}{for(var i = 0, len = gdjs.introCode.GDfaderObjects1.length ;i < len;++i) {
    gdjs.introCode.GDfaderObjects1[i].setSize(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}}

}


{


gdjs.introCode.condition0IsTrue_0.val = false;
gdjs.introCode.condition1IsTrue_0.val = false;
{
gdjs.introCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("transition")) == 0;
}if ( gdjs.introCode.condition0IsTrue_0.val ) {
{
{gdjs.introCode.conditionTrue_1 = gdjs.introCode.condition1IsTrue_0;
gdjs.introCode.condition0IsTrue_1.val = false;
gdjs.introCode.condition1IsTrue_1.val = false;
{
{gdjs.introCode.conditionTrue_2 = gdjs.introCode.condition0IsTrue_1;
gdjs.introCode.conditionTrue_2.val = (gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) >= 3);
}
if( gdjs.introCode.condition0IsTrue_1.val ) {
    gdjs.introCode.conditionTrue_1.val = true;
}
}
{
gdjs.introCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if( gdjs.introCode.condition1IsTrue_1.val ) {
    gdjs.introCode.conditionTrue_1.val = true;
}
}
{
}
}
}}
if (gdjs.introCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("fader"), gdjs.introCode.GDfaderObjects1);
{for(var i = 0, len = gdjs.introCode.GDfaderObjects1.length ;i < len;++i) {
    gdjs.introCode.GDfaderObjects1[i].getBehavior("Tween").removeTween("appear");
}
}{for(var i = 0, len = gdjs.introCode.GDfaderObjects1.length ;i < len;++i) {
    gdjs.introCode.GDfaderObjects1[i].getBehavior("Tween").addObjectOpacityTween("appear", 255, "linear", 1000, false);
}
}{runtimeScene.getVariables().get("transition").setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("fader"), gdjs.introCode.GDfaderObjects1);

gdjs.introCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.introCode.GDfaderObjects1.length;i<l;++i) {
    if ( gdjs.introCode.GDfaderObjects1[i].getBehavior("Tween").hasFinished("appear") ) {
        gdjs.introCode.condition0IsTrue_0.val = true;
        gdjs.introCode.GDfaderObjects1[k] = gdjs.introCode.GDfaderObjects1[i];
        ++k;
    }
}
gdjs.introCode.GDfaderObjects1.length = k;}if (gdjs.introCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main menu", true);
}}

}


};

gdjs.introCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.introCode.GDbackgroundObjects1.length = 0;
gdjs.introCode.GDbackgroundObjects2.length = 0;
gdjs.introCode.GDrhythmObjects1.length = 0;
gdjs.introCode.GDrhythmObjects2.length = 0;
gdjs.introCode.GDantiVirusObjects1.length = 0;
gdjs.introCode.GDantiVirusObjects2.length = 0;
gdjs.introCode.GDplayObjects1.length = 0;
gdjs.introCode.GDplayObjects2.length = 0;
gdjs.introCode.GDrechargeAntiVirusObjects1.length = 0;
gdjs.introCode.GDrechargeAntiVirusObjects2.length = 0;
gdjs.introCode.GDinterfaceRotatingElementObjects1.length = 0;
gdjs.introCode.GDinterfaceRotatingElementObjects2.length = 0;
gdjs.introCode.GDrhythmBackgroundObjects1.length = 0;
gdjs.introCode.GDrhythmBackgroundObjects2.length = 0;
gdjs.introCode.GDrhythmBackgroundGreenObjects1.length = 0;
gdjs.introCode.GDrhythmBackgroundGreenObjects2.length = 0;
gdjs.introCode.GDplayerObjects1.length = 0;
gdjs.introCode.GDplayerObjects2.length = 0;
gdjs.introCode.GDplayerThrusterObjects1.length = 0;
gdjs.introCode.GDplayerThrusterObjects2.length = 0;
gdjs.introCode.GDplayerBulletObjects1.length = 0;
gdjs.introCode.GDplayerBulletObjects2.length = 0;
gdjs.introCode.GDenemyObjects1.length = 0;
gdjs.introCode.GDenemyObjects2.length = 0;
gdjs.introCode.GDbonusPointTextObjects1.length = 0;
gdjs.introCode.GDbonusPointTextObjects2.length = 0;
gdjs.introCode.GDcomboTextObjects1.length = 0;
gdjs.introCode.GDcomboTextObjects2.length = 0;
gdjs.introCode.GDscoreTextObjects1.length = 0;
gdjs.introCode.GDscoreTextObjects2.length = 0;
gdjs.introCode.GDexplosionObjects1.length = 0;
gdjs.introCode.GDexplosionObjects2.length = 0;
gdjs.introCode.GDconsoleObjects1.length = 0;
gdjs.introCode.GDconsoleObjects2.length = 0;
gdjs.introCode.GDexplosionCenterObjects1.length = 0;
gdjs.introCode.GDexplosionCenterObjects2.length = 0;
gdjs.introCode.GDenemySpawnPointObjects1.length = 0;
gdjs.introCode.GDenemySpawnPointObjects2.length = 0;
gdjs.introCode.GDsmallArrowObjects1.length = 0;
gdjs.introCode.GDsmallArrowObjects2.length = 0;
gdjs.introCode.GDclickHereObjects1.length = 0;
gdjs.introCode.GDclickHereObjects2.length = 0;
gdjs.introCode.GDshieldMeterObjects1.length = 0;
gdjs.introCode.GDshieldMeterObjects2.length = 0;
gdjs.introCode.GDshieldTextObjects1.length = 0;
gdjs.introCode.GDshieldTextObjects2.length = 0;
gdjs.introCode.GDshieldGaugeOutlineObjects1.length = 0;
gdjs.introCode.GDshieldGaugeOutlineObjects2.length = 0;
gdjs.introCode.GDshieldGaugeBackgroundObjects1.length = 0;
gdjs.introCode.GDshieldGaugeBackgroundObjects2.length = 0;
gdjs.introCode.GDinterfaceOutlineObjects1.length = 0;
gdjs.introCode.GDinterfaceOutlineObjects2.length = 0;
gdjs.introCode.GDcountdownObjects1.length = 0;
gdjs.introCode.GDcountdownObjects2.length = 0;
gdjs.introCode.GDfaderObjects1.length = 0;
gdjs.introCode.GDfaderObjects2.length = 0;
gdjs.introCode.GDfailedSuccessTextObjects1.length = 0;
gdjs.introCode.GDfailedSuccessTextObjects2.length = 0;
gdjs.introCode.GDmenuButtonObjects1.length = 0;
gdjs.introCode.GDmenuButtonObjects2.length = 0;
gdjs.introCode.GDmenuButtonTextObjects1.length = 0;
gdjs.introCode.GDmenuButtonTextObjects2.length = 0;
gdjs.introCode.GDenemyCountObjects1.length = 0;
gdjs.introCode.GDenemyCountObjects2.length = 0;
gdjs.introCode.GDstarsObjects1.length = 0;
gdjs.introCode.GDstarsObjects2.length = 0;
gdjs.introCode.GDtitleObjects1.length = 0;
gdjs.introCode.GDtitleObjects2.length = 0;

gdjs.introCode.eventsList0(runtimeScene);
return;

}

gdjs['introCode'] = gdjs.introCode;
