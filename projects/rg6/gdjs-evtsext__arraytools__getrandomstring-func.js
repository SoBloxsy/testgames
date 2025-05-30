
if (typeof gdjs.evtsExt__ArrayTools__GetRandomString !== "undefined") {
  gdjs.evtsExt__ArrayTools__GetRandomString.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ArrayTools__GetRandomString = {};

gdjs.evtsExt__ArrayTools__GetRandomString.conditionTrue_0 = {val:false};
gdjs.evtsExt__ArrayTools__GetRandomString.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__ArrayTools__GetRandomString.userFunc0xd2b908 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const arr = runtimeScene
    .getVariables()
    .get(eventsFunctionContext.getArgument("arr"))
    .getAllChildrenArray();

eventsFunctionContext.returnValue = arr.length === 0 ? "" :
    arr[Math.floor(Math.random() * arr.length)].getAsString();

};
gdjs.evtsExt__ArrayTools__GetRandomString.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ArrayTools__GetRandomString.userFunc0xd2b908(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ArrayTools__GetRandomString.func = function(runtimeScene, arr, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "arr") return arr;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ArrayTools__GetRandomString.eventsList0(runtimeScene, eventsFunctionContext);
return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__ArrayTools__GetRandomString.registeredGdjsCallbacks = [];