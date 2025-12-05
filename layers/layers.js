var wms_layers = [];


        var lyr_MapaBase_0 = new ol.layer.Tile({
            'title': 'Mapa Base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://worldtiles3.waze.com/tiles/{z}/{x}/{y}.png'
            })
        });
var format_Seccionales_1 = new ol.format.GeoJSON();
var features_Seccionales_1 = format_Seccionales_1.readFeatures(json_Seccionales_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Seccionales_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Seccionales_1.addFeatures(features_Seccionales_1);
var lyr_Seccionales_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Seccionales_1, 
                style: style_Seccionales_1,
                popuplayertitle: 'Seccionales',
                interactive: true,
                title: '<img src="styles/legend/Seccionales_1.png" /> Seccionales'
            });
var format_SectorD_2 = new ol.format.GeoJSON();
var features_SectorD_2 = format_SectorD_2.readFeatures(json_SectorD_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SectorD_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SectorD_2.addFeatures(features_SectorD_2);
var lyr_SectorD_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SectorD_2, 
                style: style_SectorD_2,
                popuplayertitle: 'Sector D',
                interactive: true,
    title: 'Sector D<br />\
    <img src="styles/legend/SectorD_2_0.png" /> LEONARDO WASHINGTON PEREIRA MAIDANA<br />\
    <img src="styles/legend/SectorD_2_1.png" /> PABLO SEBASTIAN  CANZIANI YAQUES             <br />\
    <img src="styles/legend/SectorD_2_2.png" /> JOSE  MARTIARENA ROMERO <br />\
    <img src="styles/legend/SectorD_2_3.png" /> ABEL MARCELO  MONTES RODRIGUEZ             <br />\
    <img src="styles/legend/SectorD_2_4.png" /> JUAN CARLOS  VILLALBA MARQUEZ             <br />\
    <img src="styles/legend/SectorD_2_5.png" /> WASHINGTON GABRIEL  OLIVERA GAUNA             <br />\
    <img src="styles/legend/SectorD_2_6.png" /> MARCOS NAHUEL QUIMBO GUEDES            <br />\
    <img src="styles/legend/SectorD_2_7.png" /> JOSE CARLOS  MACHADO GONZALEZ             <br />\
    <img src="styles/legend/SectorD_2_8.png" /> CARLOS BRAIAN  FERREIRA FERREIRA             <br />\
    <img src="styles/legend/SectorD_2_9.png" /> PABLO NAKEY MONTES SUAREZ            <br />' });
var format_SectorC_3 = new ol.format.GeoJSON();
var features_SectorC_3 = format_SectorC_3.readFeatures(json_SectorC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SectorC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SectorC_3.addFeatures(features_SectorC_3);
var lyr_SectorC_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SectorC_3, 
                style: style_SectorC_3,
                popuplayertitle: 'Sector C',
                interactive: true,
    title: 'Sector C<br />\
    <img src="styles/legend/SectorC_3_0.png" /> GUILHERME  DE SOUZA DO ROSARIO         <br />\
    <img src="styles/legend/SectorC_3_1.png" /> MARTÍN  MUTIO BALLESTER MOLINA            <br />\
    <img src="styles/legend/SectorC_3_2.png" /> WALDEMAR IVAN HERNANDEZ CAETANO            <br />\
    <img src="styles/legend/SectorC_3_3.png" /> DANIEL ALEJANDRO GARAZA GONZALEZ<br />\
    <img src="styles/legend/SectorC_3_4.png" /> LUIS ENRIQUE GONZALEZ MESA            <br />\
    <img src="styles/legend/SectorC_3_5.png" /> AGUSTIN NICOLÁS CLAVIJO MACHADO            <br />\
    <img src="styles/legend/SectorC_3_6.png" /> ALAN EZEQUIEL MONZON DA SILVA            <br />\
    <img src="styles/legend/SectorC_3_7.png" /> RODRIGO NICOLÁS CABRERA FERNÁNDEZ            <br />' });
var format_SectorB_4 = new ol.format.GeoJSON();
var features_SectorB_4 = format_SectorB_4.readFeatures(json_SectorB_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SectorB_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SectorB_4.addFeatures(features_SectorB_4);
var lyr_SectorB_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SectorB_4, 
                style: style_SectorB_4,
                popuplayertitle: 'Sector B',
                interactive: true,
    title: 'Sector B<br />\
    <img src="styles/legend/SectorB_4_0.png" /> JOSE DIOGO CASTRO DE SOUZA<br />\
    <img src="styles/legend/SectorB_4_1.png" /> NESTOR FABIAN  OLAZARRI RODRIGUEZ             <br />\
    <img src="styles/legend/SectorB_4_2.png" /> ERWIN DARIO  PARENTINI FLORES             <br />\
    <img src="styles/legend/SectorB_4_3.png" /> RICHARD ALEJANDRO FLEITAS BONILLA            <br />\
    <img src="styles/legend/SectorB_4_4.png" /> GABRIEL GUALBERTO  RIVAROLA RUIZ <br />\
    <img src="styles/legend/SectorB_4_5.png" /> JULIO MICHEL  AVILA STEFANOVICH             <br />\
    <img src="styles/legend/SectorB_4_6.png" /> THOMAS CRISMAN MATIAS TRINDADE          <br />' });
var format_SectorA_5 = new ol.format.GeoJSON();
var features_SectorA_5 = format_SectorA_5.readFeatures(json_SectorA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SectorA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SectorA_5.addFeatures(features_SectorA_5);
var lyr_SectorA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SectorA_5, 
                style: style_SectorA_5,
                popuplayertitle: 'Sector A',
                interactive: true,
    title: 'Sector A<br />\
    <img src="styles/legend/SectorA_5_0.png" /> JORGE LUIS GARAZA CORREA            <br />\
    <img src="styles/legend/SectorA_5_1.png" /> WÁSHINGTON CARLOS  ESTEVEZ            <br />\
    <img src="styles/legend/SectorA_5_2.png" /> ANTHONY MARTIN  RODRIGUEZ SILVEYRA            <br />\
    <img src="styles/legend/SectorA_5_3.png" /> LUIS ALBERTO  SUAREZ CORREA             <br />\
    <img src="styles/legend/SectorA_5_4.png" /> MARCELO SEBASTIAN LABORDE RODRIGUEZ            <br />\
    <img src="styles/legend/SectorA_5_5.png" /> AGUSTINA VALERIA VIDAL RODRÍGUEZ            <br />' });

lyr_MapaBase_0.setVisible(true);lyr_Seccionales_1.setVisible(true);lyr_SectorD_2.setVisible(true);lyr_SectorC_3.setVisible(true);lyr_SectorB_4.setVisible(true);lyr_SectorA_5.setVisible(true);
var layersList = [lyr_MapaBase_0,lyr_Seccionales_1,lyr_SectorD_2,lyr_SectorC_3,lyr_SectorB_4,lyr_SectorA_5];
lyr_Seccionales_1.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'DEPARTAMEN': 'DEPARTAMEN', 'SECCION': 'SECCION', 'NPUERTA': 'NPUERTA', 'NOMBRE_1': 'NOMBRE_1', 'CODIGODPTO': 'CODIGODPTO', 'CODIGOSECC': 'CODIGOSECC', });
lyr_SectorD_2.set('fieldAliases', {'fid': 'fid', 'Cedula': 'Cedula', 'NombreCompleto': 'NombreCompleto', 'Edad': 'Edad', 'EstadoCivil': 'EstadoCivil', 'Sexo': 'Sexo', 'Nacionalidad': 'Nacionalidad', 'Alias': 'Alias', 'FechaNac.': 'FechaNac.', 'Ocupación': 'Ocupación', 'NroFicha': 'NroFicha', 'DepartamentoDomicilio': 'DepartamentoDomicilio', 'Domicilio': 'Domicilio', 'X_Domicilio': 'X_Domicilio', 'Y_Domicilio': 'Y_Domicilio', 'Rol': 'Rol', 'EventosSGSP': 'EventosSGSP', 'FechadelHechoEvento': 'FechadelHechoEvento', 'Titulo': 'Titulo', 'Complemento': 'Complemento', 'Jefatura': 'Jefatura', 'Dependencia': 'Dependencia', 'DepartamentoEvento': 'DepartamentoEvento', 'X_Evento': 'X_Evento', 'Y_Evento': 'Y_Evento', 'AsociadoViolenciaDomestica': 'AsociadoViolenciaDomestica', 'TieneMedidasCautelares': 'TieneMedidasCautelares', 'MedidasCautelares': 'MedidasCautelares', });
lyr_SectorC_3.set('fieldAliases', {'fid': 'fid', 'Cedula': 'Cedula', 'NombreCompleto': 'NombreCompleto', 'Edad': 'Edad', 'EstadoCivil': 'EstadoCivil', 'Sexo': 'Sexo', 'Nacionalidad': 'Nacionalidad', 'Alias': 'Alias', 'FechaNac.': 'FechaNac.', 'Ocupación': 'Ocupación', 'NroFicha': 'NroFicha', 'DepartamentoDomicilio': 'DepartamentoDomicilio', 'Domicilio': 'Domicilio', 'X_Domicilio': 'X_Domicilio', 'Y_Domicilio': 'Y_Domicilio', 'Rol': 'Rol', 'EventosSGSP': 'EventosSGSP', 'FechadelHechoEvento': 'FechadelHechoEvento', 'Titulo': 'Titulo', 'Complemento': 'Complemento', 'Jefatura': 'Jefatura', 'Dependencia': 'Dependencia', 'DepartamentoEvento': 'DepartamentoEvento', 'X_Evento': 'X_Evento', 'Y_Evento': 'Y_Evento', 'AsociadoViolenciaDomestica': 'AsociadoViolenciaDomestica', 'TieneMedidasCautelares': 'TieneMedidasCautelares', 'MedidasCautelares': 'MedidasCautelares', });
lyr_SectorB_4.set('fieldAliases', {'fid': 'fid', 'Cedula': 'Cedula', 'NombreCompleto': 'NombreCompleto', 'Edad': 'Edad', 'EstadoCivil': 'EstadoCivil', 'Sexo': 'Sexo', 'Nacionalidad': 'Nacionalidad', 'Alias': 'Alias', 'FechaNac.': 'FechaNac.', 'Ocupación': 'Ocupación', 'NroFicha': 'NroFicha', 'DepartamentoDomicilio': 'DepartamentoDomicilio', 'Domicilio': 'Domicilio', 'X_Domicilio': 'X_Domicilio', 'Y_Domicilio': 'Y_Domicilio', 'Rol': 'Rol', 'EventosSGSP': 'EventosSGSP', 'FechadelHechoEvento': 'FechadelHechoEvento', 'Titulo': 'Titulo', 'Complemento': 'Complemento', 'Jefatura': 'Jefatura', 'Dependencia': 'Dependencia', 'DepartamentoEvento': 'DepartamentoEvento', 'X_Evento': 'X_Evento', 'Y_Evento': 'Y_Evento', 'AsociadoViolenciaDomestica': 'AsociadoViolenciaDomestica', 'TieneMedidasCautelares': 'TieneMedidasCautelares', 'MedidasCautelares': 'MedidasCautelares', });
lyr_SectorA_5.set('fieldAliases', {'fid': 'fid', 'Cedula': 'Cedula', 'NombreCompleto': 'NombreCompleto', 'Edad': 'Edad', 'EstadoCivil': 'EstadoCivil', 'Sexo': 'Sexo', 'Nacionalidad': 'Nacionalidad', 'Alias': 'Alias', 'FechaNac.': 'FechaNac.', 'Ocupación': 'Ocupación', 'NroFicha': 'NroFicha', 'DepartamentoDomicilio': 'DepartamentoDomicilio', 'Domicilio': 'Domicilio', 'X_Domicilio': 'X_Domicilio', 'Y_Domicilio': 'Y_Domicilio', 'Rol': 'Rol', 'EventosSGSP': 'EventosSGSP', 'FechadelHechoEvento': 'FechadelHechoEvento', 'Titulo': 'Titulo', 'Complemento': 'Complemento', 'Jefatura': 'Jefatura', 'Dependencia': 'Dependencia', 'DepartamentoEvento': 'DepartamentoEvento', 'X_Evento': 'X_Evento', 'Y_Evento': 'Y_Evento', 'AsociadoViolenciaDomestica': 'AsociadoViolenciaDomestica', 'TieneMedidasCautelares': 'TieneMedidasCautelares', 'MedidasCautelares': 'MedidasCautelares', });
lyr_Seccionales_1.set('fieldImages', {'NOMBRE': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'SECCION': 'Range', 'NPUERTA': 'Range', 'NOMBRE_1': 'TextEdit', 'CODIGODPTO': 'TextEdit', 'CODIGOSECC': 'TextEdit', });
lyr_SectorD_2.set('fieldImages', {'fid': 'TextEdit', 'Cedula': 'TextEdit', 'NombreCompleto': 'TextEdit', 'Edad': 'TextEdit', 'EstadoCivil': 'TextEdit', 'Sexo': 'TextEdit', 'Nacionalidad': 'TextEdit', 'Alias': 'TextEdit', 'FechaNac.': 'TextEdit', 'Ocupación': 'TextEdit', 'NroFicha': 'Range', 'DepartamentoDomicilio': 'TextEdit', 'Domicilio': 'TextEdit', 'X_Domicilio': 'TextEdit', 'Y_Domicilio': 'TextEdit', 'Rol': 'TextEdit', 'EventosSGSP': 'Range', 'FechadelHechoEvento': 'TextEdit', 'Titulo': 'TextEdit', 'Complemento': 'TextEdit', 'Jefatura': 'TextEdit', 'Dependencia': 'TextEdit', 'DepartamentoEvento': 'TextEdit', 'X_Evento': 'TextEdit', 'Y_Evento': 'TextEdit', 'AsociadoViolenciaDomestica': 'TextEdit', 'TieneMedidasCautelares': 'TextEdit', 'MedidasCautelares': 'TextEdit', });
lyr_SectorC_3.set('fieldImages', {'fid': 'TextEdit', 'Cedula': 'TextEdit', 'NombreCompleto': 'TextEdit', 'Edad': 'TextEdit', 'EstadoCivil': 'TextEdit', 'Sexo': 'TextEdit', 'Nacionalidad': 'TextEdit', 'Alias': 'TextEdit', 'FechaNac.': 'TextEdit', 'Ocupación': 'TextEdit', 'NroFicha': 'Range', 'DepartamentoDomicilio': 'TextEdit', 'Domicilio': 'TextEdit', 'X_Domicilio': 'TextEdit', 'Y_Domicilio': 'TextEdit', 'Rol': 'TextEdit', 'EventosSGSP': 'Range', 'FechadelHechoEvento': 'TextEdit', 'Titulo': 'TextEdit', 'Complemento': 'TextEdit', 'Jefatura': 'TextEdit', 'Dependencia': 'TextEdit', 'DepartamentoEvento': 'TextEdit', 'X_Evento': 'TextEdit', 'Y_Evento': 'TextEdit', 'AsociadoViolenciaDomestica': 'TextEdit', 'TieneMedidasCautelares': 'TextEdit', 'MedidasCautelares': 'TextEdit', });
lyr_SectorB_4.set('fieldImages', {'fid': 'TextEdit', 'Cedula': 'TextEdit', 'NombreCompleto': 'TextEdit', 'Edad': 'TextEdit', 'EstadoCivil': 'TextEdit', 'Sexo': 'TextEdit', 'Nacionalidad': 'TextEdit', 'Alias': 'TextEdit', 'FechaNac.': 'TextEdit', 'Ocupación': 'TextEdit', 'NroFicha': 'Range', 'DepartamentoDomicilio': 'TextEdit', 'Domicilio': 'TextEdit', 'X_Domicilio': 'TextEdit', 'Y_Domicilio': 'TextEdit', 'Rol': 'TextEdit', 'EventosSGSP': 'Range', 'FechadelHechoEvento': 'TextEdit', 'Titulo': 'TextEdit', 'Complemento': 'TextEdit', 'Jefatura': 'TextEdit', 'Dependencia': 'TextEdit', 'DepartamentoEvento': 'TextEdit', 'X_Evento': 'TextEdit', 'Y_Evento': 'TextEdit', 'AsociadoViolenciaDomestica': 'TextEdit', 'TieneMedidasCautelares': 'TextEdit', 'MedidasCautelares': 'TextEdit', });
lyr_SectorA_5.set('fieldImages', {'fid': 'TextEdit', 'Cedula': 'TextEdit', 'NombreCompleto': 'TextEdit', 'Edad': 'TextEdit', 'EstadoCivil': 'TextEdit', 'Sexo': 'TextEdit', 'Nacionalidad': 'TextEdit', 'Alias': 'TextEdit', 'FechaNac.': 'TextEdit', 'Ocupación': 'TextEdit', 'NroFicha': 'Range', 'DepartamentoDomicilio': 'TextEdit', 'Domicilio': 'TextEdit', 'X_Domicilio': 'TextEdit', 'Y_Domicilio': 'TextEdit', 'Rol': 'TextEdit', 'EventosSGSP': 'Range', 'FechadelHechoEvento': 'TextEdit', 'Titulo': 'TextEdit', 'Complemento': 'TextEdit', 'Jefatura': 'TextEdit', 'Dependencia': 'TextEdit', 'DepartamentoEvento': 'TextEdit', 'X_Evento': 'TextEdit', 'Y_Evento': 'TextEdit', 'AsociadoViolenciaDomestica': 'TextEdit', 'TieneMedidasCautelares': 'TextEdit', 'MedidasCautelares': 'TextEdit', });
lyr_Seccionales_1.set('fieldLabels', {'NOMBRE': 'hidden field', 'DEPARTAMEN': 'hidden field', 'SECCION': 'hidden field', 'NPUERTA': 'hidden field', 'NOMBRE_1': 'hidden field', 'CODIGODPTO': 'hidden field', 'CODIGOSECC': 'hidden field', });
lyr_SectorD_2.set('fieldLabels', {'fid': 'hidden field', 'Cedula': 'inline label - visible with data', 'NombreCompleto': 'inline label - visible with data', 'Edad': 'hidden field', 'EstadoCivil': 'hidden field', 'Sexo': 'hidden field', 'Nacionalidad': 'hidden field', 'Alias': 'hidden field', 'FechaNac.': 'hidden field', 'Ocupación': 'hidden field', 'NroFicha': 'hidden field', 'DepartamentoDomicilio': 'hidden field', 'Domicilio': 'hidden field', 'X_Domicilio': 'hidden field', 'Y_Domicilio': 'hidden field', 'Rol': 'inline label - visible with data', 'EventosSGSP': 'inline label - visible with data', 'FechadelHechoEvento': 'hidden field', 'Titulo': 'inline label - visible with data', 'Complemento': 'hidden field', 'Jefatura': 'hidden field', 'Dependencia': 'hidden field', 'DepartamentoEvento': 'hidden field', 'X_Evento': 'hidden field', 'Y_Evento': 'hidden field', 'AsociadoViolenciaDomestica': 'hidden field', 'TieneMedidasCautelares': 'hidden field', 'MedidasCautelares': 'hidden field', });
lyr_SectorC_3.set('fieldLabels', {'fid': 'hidden field', 'Cedula': 'inline label - visible with data', 'NombreCompleto': 'inline label - visible with data', 'Edad': 'hidden field', 'EstadoCivil': 'hidden field', 'Sexo': 'hidden field', 'Nacionalidad': 'hidden field', 'Alias': 'hidden field', 'FechaNac.': 'hidden field', 'Ocupación': 'hidden field', 'NroFicha': 'hidden field', 'DepartamentoDomicilio': 'hidden field', 'Domicilio': 'hidden field', 'X_Domicilio': 'hidden field', 'Y_Domicilio': 'hidden field', 'Rol': 'inline label - visible with data', 'EventosSGSP': 'inline label - visible with data', 'FechadelHechoEvento': 'hidden field', 'Titulo': 'inline label - visible with data', 'Complemento': 'hidden field', 'Jefatura': 'hidden field', 'Dependencia': 'hidden field', 'DepartamentoEvento': 'hidden field', 'X_Evento': 'hidden field', 'Y_Evento': 'hidden field', 'AsociadoViolenciaDomestica': 'hidden field', 'TieneMedidasCautelares': 'hidden field', 'MedidasCautelares': 'hidden field', });
lyr_SectorB_4.set('fieldLabels', {'fid': 'hidden field', 'Cedula': 'inline label - visible with data', 'NombreCompleto': 'inline label - visible with data', 'Edad': 'hidden field', 'EstadoCivil': 'hidden field', 'Sexo': 'hidden field', 'Nacionalidad': 'hidden field', 'Alias': 'hidden field', 'FechaNac.': 'hidden field', 'Ocupación': 'hidden field', 'NroFicha': 'hidden field', 'DepartamentoDomicilio': 'hidden field', 'Domicilio': 'hidden field', 'X_Domicilio': 'hidden field', 'Y_Domicilio': 'hidden field', 'Rol': 'inline label - visible with data', 'EventosSGSP': 'inline label - visible with data', 'FechadelHechoEvento': 'hidden field', 'Titulo': 'inline label - visible with data', 'Complemento': 'hidden field', 'Jefatura': 'hidden field', 'Dependencia': 'hidden field', 'DepartamentoEvento': 'hidden field', 'X_Evento': 'hidden field', 'Y_Evento': 'hidden field', 'AsociadoViolenciaDomestica': 'hidden field', 'TieneMedidasCautelares': 'hidden field', 'MedidasCautelares': 'hidden field', });
lyr_SectorA_5.set('fieldLabels', {'fid': 'hidden field', 'Cedula': 'inline label - visible with data', 'NombreCompleto': 'inline label - visible with data', 'Edad': 'hidden field', 'EstadoCivil': 'hidden field', 'Sexo': 'hidden field', 'Nacionalidad': 'hidden field', 'Alias': 'hidden field', 'FechaNac.': 'hidden field', 'Ocupación': 'hidden field', 'NroFicha': 'hidden field', 'DepartamentoDomicilio': 'hidden field', 'Domicilio': 'hidden field', 'X_Domicilio': 'hidden field', 'Y_Domicilio': 'hidden field', 'Rol': 'inline label - visible with data', 'EventosSGSP': 'inline label - visible with data', 'FechadelHechoEvento': 'hidden field', 'Titulo': 'inline label - visible with data', 'Complemento': 'hidden field', 'Jefatura': 'hidden field', 'Dependencia': 'hidden field', 'DepartamentoEvento': 'hidden field', 'X_Evento': 'hidden field', 'Y_Evento': 'hidden field', 'AsociadoViolenciaDomestica': 'hidden field', 'TieneMedidasCautelares': 'hidden field', 'MedidasCautelares': 'hidden field', });
lyr_SectorA_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});