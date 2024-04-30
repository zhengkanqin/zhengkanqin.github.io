ol.proj.useGeographic();

var view = new ol.View({
    center: [114.3, 30.6], // 设置武汉市的经纬度作为中心点
    zoom: 8 // 你可以根据需要设置缩放级别
});

var map = new ol.Map({
    target: 'map',
    view: view,
    layers: [],
    controls: ol.control.defaults.defaults().extend([    // 往地图增加控件
        new ol.control.MousePosition(),//坐标拾取控件
        new ol.control.ScaleLine(), //比例尺控件
    ])
});

var tianditu = new ol.layer.Tile({
    source: new ol.source.XYZ({
        url: "http://t0.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=5eee126a8013be4f8a69c64240d9de05",
    })
});

//var zhuji = new ol.layer.Tile({
//    source: new ol.source.XYZ({
//        url: 'http://t0.tianditu.gov.cn/cia_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=5eee126a8013be4f8a69c64240d9de05',
//    })
//});

var whu = new ol.layer.Image({
    source: new ol.source.ImageWMS({
        url: 'http://localhost:8080/geoserver/ne/wms',
        params: {
            'LAYERS': 'ne:areawh',//图层参数
            'VERSION': '1.1.1', // WMS版本号
            'FORMAT': 'image/png', // WMS服务支持的图像格式
            'SRS': 'EPSG:4326' // 投影坐标系
        }
    })
});

var my_json = new ol.layer.Vector({
    title: 'add Json',
    source: new ol.source.Vector({
        projection: 'EPSG:4326',
        url: "./public/wh.geoJson", //GeoJSON的文件路径，用户可以根据需求而改变
        format: new ol.format.GeoJSON()
    })
});

map.setLayers([tianditu, whu, my_json]);