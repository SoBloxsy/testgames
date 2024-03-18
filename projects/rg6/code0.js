gdjs.standbyCode = {};
gdjs.standbyCode.GDbackgroundObjects1= [];
gdjs.standbyCode.GDbackgroundObjects2= [];
gdjs.standbyCode.GDrhythmObjects1= [];
gdjs.standbyCode.GDrhythmObjects2= [];
gdjs.standbyCode.GDantiVirusObjects1= [];
gdjs.standbyCode.GDantiVirusObjects2= [];
gdjs.standbyCode.GDplayObjects1= [];
gdjs.standbyCode.GDplayObjects2= [];
gdjs.standbyCode.GDrechargeAntiVirusObjects1= [];
gdjs.standbyCode.GDrechargeAntiVirusObjects2= [];
gdjs.standbyCode.GDinterfaceRotatingElementObjects1= [];
gdjs.standbyCode.GDinterfaceRotatingElementObjects2= [];
gdjs.standbyCode.GDrhythmBackgroundObjects1= [];
gdjs.standbyCode.GDrhythmBackgroundObjects2= [];
gdjs.standbyCode.GDrhythmBackgroundGreenObjects1= [];
gdjs.standbyCode.GDrhythmBackgroundGreenObjects2= [];
gdjs.standbyCode.GDplayerObjects1= [];
gdjs.standbyCode.GDplayerObjects2= [];
gdjs.standbyCode.GDplayerThrusterObjects1= [];
gdjs.standbyCode.GDplayerThrusterObjects2= [];
gdjs.standbyCode.GDplayerBulletObjects1= [];
gdjs.standbyCode.GDplayerBulletObjects2= [];
gdjs.standbyCode.GDenemyObjects1= [];
gdjs.standbyCode.GDenemyObjects2= [];
gdjs.standbyCode.GDbonusPointTextObjects1= [];
gdjs.standbyCode.GDbonusPointTextObjects2= [];
gdjs.standbyCode.GDcomboTextObjects1= [];
gdjs.standbyCode.GDcomboTextObjects2= [];
gdjs.standbyCode.GDscoreTextObjects1= [];
gdjs.standbyCode.GDscoreTextObjects2= [];
gdjs.standbyCode.GDexplosionObjects1= [];
gdjs.standbyCode.GDexplosionObjects2= [];
gdjs.standbyCode.GDconsoleObjects1= [];
gdjs.standbyCode.GDconsoleObjects2= [];
gdjs.standbyCode.GDexplosionCenterObjects1= [];
gdjs.standbyCode.GDexplosionCenterObjects2= [];
gdjs.standbyCode.GDenemySpawnPointObjects1= [];
gdjs.standbyCode.GDenemySpawnPointObjects2= [];
gdjs.standbyCode.GDsmallArrowObjects1= [];
gdjs.standbyCode.GDsmallArrowObjects2= [];
gdjs.standbyCode.GDclickHereObjects1= [];
gdjs.standbyCode.GDclickHereObjects2= [];
gdjs.standbyCode.GDshieldMeterObjects1= [];
gdjs.standbyCode.GDshieldMeterObjects2= [];
gdjs.standbyCode.GDshieldTextObjects1= [];
gdjs.standbyCode.GDshieldTextObjects2= [];
gdjs.standbyCode.GDshieldGaugeOutlineObjects1= [];
gdjs.standbyCode.GDshieldGaugeOutlineObjects2= [];
gdjs.standbyCode.GDshieldGaugeBackgroundObjects1= [];
gdjs.standbyCode.GDshieldGaugeBackgroundObjects2= [];
gdjs.standbyCode.GDinterfaceOutlineObjects1= [];
gdjs.standbyCode.GDinterfaceOutlineObjects2= [];
gdjs.standbyCode.GDcountdownObjects1= [];
gdjs.standbyCode.GDcountdownObjects2= [];
gdjs.standbyCode.GDfaderObjects1= [];
gdjs.standbyCode.GDfaderObjects2= [];
gdjs.standbyCode.GDfailedSuccessTextObjects1= [];
gdjs.standbyCode.GDfailedSuccessTextObjects2= [];
gdjs.standbyCode.GDmenuButtonObjects1= [];
gdjs.standbyCode.GDmenuButtonObjects2= [];
gdjs.standbyCode.GDmenuButtonTextObjects1= [];
gdjs.standbyCode.GDmenuButtonTextObjects2= [];
gdjs.standbyCode.GDenemyCountObjects1= [];
gdjs.standbyCode.GDenemyCountObjects2= [];
gdjs.standbyCode.GDstarsObjects1= [];
gdjs.standbyCode.GDstarsObjects2= [];
gdjs.standbyCode.GDstandbyTextObjects1= [];
gdjs.standbyCode.GDstandbyTextObjects2= [];

gdjs.standbyCode.conditionTrue_0 = {val:false};
gdjs.standbyCode.condition0IsTrue_0 = {val:false};
gdjs.standbyCode.condition1IsTrue_0 = {val:false};


gdjs.standbyCode.eventsList0 = function(runtimeScene) {

{


gdjs.standbyCode.condition0IsTrue_0.val = false;
{
gdjs.standbyCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.standbyCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("standbyText"), gdjs.standbyCode.GDstandbyTextObjects1);
{for(var i = 0, len = gdjs.standbyCode.GDstandbyTextObjects1.length ;i < len;++i) {
    gdjs.standbyCode.GDstandbyTextObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


{


gdjs.standbyCode.condition0IsTrue_0.val = false;
{
gdjs.standbyCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.standbyCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "intro", true);
}}

}


};

gdjs.standbyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.standbyCode.GDbackgroundObjects1.length = 0;
gdjs.standbyCode.GDbackgroundObjects2.length = 0;
gdjs.standbyCode.GDrhythmObjects1.length = 0;
gdjs.standbyCode.GDrhythmObjects2.length = 0;
gdjs.standbyCode.GDantiVirusObjects1.length = 0;
gdjs.standbyCode.GDantiVirusObjects2.length = 0;
gdjs.standbyCode.GDplayObjects1.length = 0;
gdjs.standbyCode.GDplayObjects2.length = 0;
gdjs.standbyCode.GDrechargeAntiVirusObjects1.length = 0;
gdjs.standbyCode.GDrechargeAntiVirusObjects2.length = 0;
gdjs.standbyCode.GDinterfaceRotatingElementObjects1.length = 0;
gdjs.standbyCode.GDinterfaceRotatingElementObjects2.length = 0;
gdjs.standbyCode.GDrhythmBackgroundObjects1.length = 0;
gdjs.standbyCode.GDrhythmBackgroundObjects2.length = 0;
gdjs.standbyCode.GDrhythmBackgroundGreenObjects1.length = 0;
gdjs.standbyCode.GDrhythmBackgroundGreenObjects2.length = 0;
gdjs.standbyCode.GDplayerObjects1.length = 0;
gdjs.standbyCode.GDplayerObjects2.length = 0;
gdjs.standbyCode.GDplayerThrusterObjects1.length = 0;
gdjs.standbyCode.GDplayerThrusterObjects2.length = 0;
gdjs.standbyCode.GDplayerBulletObjects1.length = 0;
gdjs.standbyCode.GDplayerBulletObjects2.length = 0;
gdjs.standbyCode.GDenemyObjects1.length = 0;
gdjs.standbyCode.GDenemyObjects2.length = 0;
gdjs.standbyCode.GDbonusPointTextObjects1.length = 0;
gdjs.standbyCode.GDbonusPointTextObjects2.length = 0;
gdjs.standbyCode.GDcomboTextObjects1.length = 0;
gdjs.standbyCode.GDcomboTextObjects2.length = 0;
gdjs.standbyCode.GDscoreTextObjects1.length = 0;
gdjs.standbyCode.GDscoreTextObjects2.length = 0;
gdjs.standbyCode.GDexplosionObjects1.length = 0;
gdjs.standbyCode.GDexplosionObjects2.length = 0;
gdjs.standbyCode.GDconsoleObjects1.length = 0;
gdjs.standbyCode.GDconsoleObjects2.length = 0;
gdjs.standbyCode.GDexplosionCenterObjects1.length = 0;
gdjs.standbyCode.GDexplosionCenterObjects2.length = 0;
gdjs.standbyCode.GDenemySpawnPointObjects1.length = 0;
gdjs.standbyCode.GDenemySpawnPointObjects2.length = 0;
gdjs.standbyCode.GDsmallArrowObjects1.length = 0;
gdjs.standbyCode.GDsmallArrowObjects2.length = 0;
gdjs.standbyCode.GDclickHereObjects1.length = 0;
gdjs.standbyCode.GDclickHereObjects2.length = 0;
gdjs.standbyCode.GDshieldMeterObjects1.length = 0;
gdjs.standbyCode.GDshieldMeterObjects2.length = 0;
gdjs.standbyCode.GDshieldTextObjects1.length = 0;
gdjs.standbyCode.GDshieldTextObjects2.length = 0;
gdjs.standbyCode.GDshieldGaugeOutlineObjects1.length = 0;
gdjs.standbyCode.GDshieldGaugeOutlineObjects2.length = 0;
gdjs.standbyCode.GDshieldGaugeBackgroundObjects1.length = 0;
gdjs.standbyCode.GDshieldGaugeBackgroundObjects2.length = 0;
gdjs.standbyCode.GDinterfaceOutlineObjects1.length = 0;
gdjs.standbyCode.GDinterfaceOutlineObjects2.length = 0;
gdjs.standbyCode.GDcountdownObjects1.length = 0;
gdjs.standbyCode.GDcountdownObjects2.length = 0;
gdjs.standbyCode.GDfaderObjects1.length = 0;
gdjs.standbyCode.GDfaderObjects2.length = 0;
gdjs.standbyCode.GDfailedSuccessTextObjects1.length = 0;
gdjs.standbyCode.GDfailedSuccessTextObjects2.length = 0;
gdjs.standbyCode.GDmenuButtonObjects1.length = 0;
gdjs.standbyCode.GDmenuButtonObjects2.length = 0;
gdjs.standbyCode.GDmenuButtonTextObjects1.length = 0;
gdjs.standbyCode.GDmenuButtonTextObjects2.length = 0;
gdjs.standbyCode.GDenemyCountObjects1.length = 0;
gdjs.standbyCode.GDenemyCountObjects2.length = 0;
gdjs.standbyCode.GDstarsObjects1.length = 0;
gdjs.standbyCode.GDstarsObjects2.length = 0;
gdjs.standbyCode.GDstandbyTextObjects1.length = 0;
gdjs.standbyCode.GDstandbyTextObjects2.length = 0;

gdjs.standbyCode.eventsList0(runtimeScene);
return;

}

gdjs['standbyCode'] = gdjs.standbyCode;
