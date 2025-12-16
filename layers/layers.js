ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([61.258246, 11.032133, 101.955212, 32.930663]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_EstadosdelaIndia_1 = new ol.format.GeoJSON();
var features_EstadosdelaIndia_1 = format_EstadosdelaIndia_1.readFeatures(json_EstadosdelaIndia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_EstadosdelaIndia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstadosdelaIndia_1.addFeatures(features_EstadosdelaIndia_1);
var lyr_EstadosdelaIndia_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstadosdelaIndia_1, 
                style: style_EstadosdelaIndia_1,
                popuplayertitle: 'Estados de la India',
                interactive: true,
                title: '<img src="styles/legend/EstadosdelaIndia_1.png" /> Estados de la India'
            });
var format_Estaciondemonitoreo_2 = new ol.format.GeoJSON();
var features_Estaciondemonitoreo_2 = format_Estaciondemonitoreo_2.readFeatures(json_Estaciondemonitoreo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Estaciondemonitoreo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estaciondemonitoreo_2.addFeatures(features_Estaciondemonitoreo_2);
var lyr_Estaciondemonitoreo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estaciondemonitoreo_2, 
                style: style_Estaciondemonitoreo_2,
                popuplayertitle: 'Estacion de monitoreo',
                interactive: true,
                title: '<img src="styles/legend/Estaciondemonitoreo_2.png" /> Estacion de monitoreo'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_EstadosdelaIndia_1.setVisible(true);lyr_Estaciondemonitoreo_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_EstadosdelaIndia_1,lyr_Estaciondemonitoreo_2];
lyr_EstadosdelaIndia_1.set('fieldAliases', {'fid': 'fid', 'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_Estaciondemonitoreo_2.set('fieldAliases', {'StationId': 'StationId', 'StationName': 'StationName', 'City': 'City', 'State': 'State', 'Status': 'Status', 'Country': 'Country', 'Adress': 'Adress', 'Longitud': 'Longitud', 'Latitud': 'Latitud', });
lyr_EstadosdelaIndia_1.set('fieldImages', {'fid': '', 'GID_1': '', 'GID_0': '', 'COUNTRY': '', 'NAME_1': '', 'VARNAME_1': '', 'NL_NAME_1': '', 'TYPE_1': '', 'ENGTYPE_1': '', 'CC_1': '', 'HASC_1': '', 'ISO_1': '', });
lyr_Estaciondemonitoreo_2.set('fieldImages', {'StationId': '', 'StationName': '', 'City': '', 'State': '', 'Status': '', 'Country': '', 'Adress': '', 'Longitud': '', 'Latitud': '', });
lyr_EstadosdelaIndia_1.set('fieldLabels', {'fid': 'no label', 'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', });
lyr_Estaciondemonitoreo_2.set('fieldLabels', {'StationId': 'no label', 'StationName': 'no label', 'City': 'no label', 'State': 'no label', 'Status': 'no label', 'Country': 'no label', 'Adress': 'no label', 'Longitud': 'no label', 'Latitud': 'no label', });
lyr_Estaciondemonitoreo_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});