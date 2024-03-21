/**
 * @description Globally available configuration values for map resources
 * @returns {object} JSON Object with map references
 */
const MapConfig = {
    ////Proxy: {
    ////    "Prefix": "https://maps3-stg.hdrgateway.com"
    ////    , "Url": "https://proxy.hdrgateway.com/proxy.ashx?"
    ////},
    //APIKEY: {
    //   "AAPKeb457ba54c20476abf4aa674fca458b6Gu3y4Vk2PiPTD6YT5jpdkSPdzG9TcIX8z5as-AFRLcHEk85F7QE1XFGH7tohvSnq"
    //},
    Views: {
        //OverView: {
        //    Id: 'overview-tab',
        //    Name: 'OverView',
        //    MapSettings: {},
        //    RelatedTableFieldMap: {},
        //    Legend: {}
        //},
        //Environmental: {
        //    Id: 'environmental-tab',
        //    Name: 'Environmental',
        //    MapSettings: {},
        //    RelatedTableFieldMap: {},
        //    Legend: {}
        //},
        //Easements: {
        //    Id: 'easements-tab',
        //    Name: 'Easements',
        //    MapSettings: {},
        //    RelatedTableFieldMap: {},
        //    Legend: {}
        //}
    }
    , Services: {
        Entities: {
            url: "https://maps3-stg.hdrgateway.com/arcgis/rest/services/Texas/TWDB_Flood_Planning_Areas_Map/MapServer/1",
            title: "Entities",
            minScale: 0,
            maxScale: 0,
            actions: {},
            visible: true,
            template: {
                title: "",
                fieldInfos: []
            }
        },
        Regions: {

            url: "https://maps3-stg.hdrgateway.com/arcgis/rest/services/Texas/TWDB_Regions/MapServer"
            , title: "Texas Water Board regions"
            , minScale: 0
            , maxScale: 0
            , actions: {}
            , visible: true
            , template: {
                title: ""
                , fieldInfos: []
            }
        },
        Planning: {

            url: "https://maps3-stg.hdrgateway.com/arcgis/rest/services/Texas/TWDB_Flood_Planning_Areas_Map/MapServer"
            , title: "Planning layers"
            , minScale: 0
            , maxScale: 0
            , actions: {}
            , visible: true
            , template: {
                title: ""
                , fieldInfos: []
            }
        },
        Risks: {

            url: "https://maps3-stg.hdrgateway.com/arcgis/rest/services/Texas/TWDB_Existing_Flood_Risk_Map/MapServer"
            , title: "Risk layers"
            , minScale: 0
            , maxScale: 0
            , actions: {}
            , visible: true
            , template: {
                title: ""
                , fieldInfos: []
            }
        },
        FutRisks: {

            url: "https://maps3-stg.hdrgateway.com/arcgis/rest/services/Texas/TWDB_Future_Flood_Risk_Map/MapServer"
            , title: "Future Risk layers"
            , minScale: 0
            , maxScale: 0
            , actions: {}
            , visible: true
            , template: {
                title: ""
                , fieldInfos: []
            }
        },
        Projects: {

            url: "https://maps3-stg.hdrgateway.com/arcgis/rest/services/Texas/TWDB_Flood_Management_and_Mitigation_Solutions_Map/MapServer"
            , title: "Project layers"
            , minScale: 0
            , maxScale: 0
            , actions: {}
            , visible: true
            , template: {
                title: ""
                , fieldInfos: []
            }
        },
        Infra: {

            url: "https://maps3-stg.hdrgateway.com/arcgis/rest/services/Texas/TWDB_Existing_Infrastructure_and_Ongoing_Projects_Map/MapServer"
            , title: "Infrastructure layers"
            , minScale: 0
            , maxScale: 0
            , actions: {}
            , visible: true
            , template: {
                title: ""
                , fieldInfos: []
            }
        },
        InfraVTLPoint: {

            url: "https://tiles.arcgis.com/tiles/04HiymDgLlsbhaV4/arcgis/rest/services/Flood_Infrastructure_Point/VectorTileServer"
            , title: "Infrastructure VTL points"
            , minScale: 0
            , maxScale: 0
            , actions: {}
            , visible: true
            , template: {
                title: ""
                , fieldInfos: []
            }
        },
        InfraVTLPoly: {

            url: "https://www.arcgis.com/sharing/rest/content/items/4cf7e1fb9f254dcda9c8fbadb15cf0f8/resources/styles/root.json"
            , title: "Infrastructure VTL poly"
            , minScale: 0
            , maxScale: 0
            , actions: {}
            , visible: true
            , template: {
                title: ""
                , fieldInfos: []
            }
        },
        InfraVTLLine: {

            url: "https://tiles.arcgis.com/tiles/04HiymDgLlsbhaV4/arcgis/rest/services/Flood_Infrastructure_Line/VectorTileServer"
            , title: "Infrastructure VTL lines"
            , minScale: 0
            , maxScale: 0
            , actions: {}
            , visible: true
            , template: {
                title: ""
                , fieldInfos: []
            }
        },
        FMEVTL: {

            url: "https://tiles.arcgis.com/tiles/04HiymDgLlsbhaV4/arcgis/rest/services/FME/VectorTileServer"
            , title: "FME VTL"
            , minScale: 0
            , maxScale: 0
            , actions: {}
            , visible: true
            , template: {
                title: ""
                , fieldInfos: []
            }
        },
        FMPVTL: {

            url: "https://tiles.arcgis.com/tiles/04HiymDgLlsbhaV4/arcgis/rest/services/FMP/VectorTileServer"
            , title: "FMP VTL"
            , minScale: 0
            , maxScale: 0
            , actions: {}
            , visible: true
            , template: {
                title: ""
                , fieldInfos: []
            }
        },
        FMSVTL: {

            url: "https://tiles.arcgis.com/tiles/04HiymDgLlsbhaV4/arcgis/rest/services/FMS/VectorTileServer"
            , title: "FMS VTL"
            , minScale: 0
            , maxScale: 0
            , actions: {}
            , visible: true
            , template: {
                title: ""
                , fieldInfos: []
            }
        },

        FMSExRiskPoly: {

            url: "https://tiles.arcgis.com/tiles/04HiymDgLlsbhaV4/arcgis/rest/services/Existing_Exposure_Polygon/VectorTileServer"
            , title: "Existing Exposure VTL"
            , minScale: 0
            , maxScale: 0
            , actions: {}
            , visible: true
            , template: {
                title: ""
                , fieldInfos: []
            }
        },
        FMSFutRiskPoly: {

            url: "https://tiles.arcgis.com/tiles/04HiymDgLlsbhaV4/arcgis/rest/services/Future_Exposure_Polygon/VectorTileServer"
            , title: "Future Exposure VTL"
            , minScale: 0
            , maxScale: 0
            , actions: {}
            , visible: true
            , template: {
                title: ""
                , fieldInfos: []
            }
        },
    },
    RelatedTableFieldMap:
    {
        Actions: 0,
        Tract: 1,
        Owner: 2,
        Address: 3,
        City: 4,
        Zipcode: 5,
        Project: 6,
        Status: 7
    },
    Defaults: {
        MapSettings: {
            Center: [-99.47, 31.765]
            , Zoom: 6
            , Basemap: "topo-vector"
            , TrackSettings: {
                goToLocationEnabled: true
                , useHeadingEnabled: false
            }
        }
        , Legend: [
            {
                "label": "",
                "url": "",
                "imageData": "",
                "contentType": "",
                "height": 0,
                "width": 0,
                "values": [
                    ""
                ]
            }
        ]
        , Basemaps: {
            //Imagery: {
            //	url: ""
            //	, title: ""
            //	, visible: false
            //	, popupEnabled: false
            //}
        } // Use if sources are not standard // Also source for Ortho Imagery
        //, StatusScheme:
        //{
        //    NotStarted: {
        //        id: "NotStarted",
        //        name: "Not Started",
        //        color: "#8DA0CB"
        //    },
        //    Negotiations: {
        //        id: "Form14",
        //        name: "Form 14 Completed",
        //        color: "#FC8D62"
        //    },
        //    Appraisal: {
        //        id: "NotStarted",
        //        name: "Appraisal Started",
        //        color: "#8DA0CB"
        //    },
        //    Acquired: {
        //        id: "ReCheck",
        //        name: "Legal Desc Re-Check Complete",
        //        color: "#66C2A5",
        //    },
        //    Referred: {
        //        id: "Other",
        //        name: "Other",
        //        color: "#E78AC3"
        //    }
        //},
    },
    WatchProperties: [
        'a', 'access', 'accessinformation', 'accumulateattributes', 'actions', 'actionsopen', 'actionssections', 'active', 'activeaction', 'activeattachmentinfo', 'activebasemap', 'activebookmark', 'activefilterid', 'activelayer', 'activelayerinfos', 'activemenu', 'activesource', 'activesourceindex', 'activetool', 'activeviewmodel', 'activewidget', 'activeworkflow', 'address', 'addresssearchenabled', 'admintokenserviceurl', 'aggregateids', 'algorithm', 'alias', 'alignment', 'allactions', 'alllayers', 'alllayerviews', 'allowedformats', 'allowedlayouts', 'allowedvalues', 'allowedworkflows', 'allplaceholder', 'allsources', 'allssl', 'allsublayers', 'alltables', 'allvisiblemapimages', 'allvisiblepoints', 'allvisiblepolygons', 'allvisiblepolylines', 'alphacompositingenabled', 'alphacutoff', 'alphamode', 'altitude', 'alttext', 'anchor', 'anchorposition', 'angle', 'animation', 'apikey', 'appid', 'applicationproperties', 'applicationproxies', 'ascending', 'assetspath', 'atmosphereenabled', 'attachmentinfos', 'attachmentsenabled', 'attachmentswhere', 'attachmenttypes', 'attributefield', 'attributeparametervalues', 'attributes', 'attributetable', 'attributiondataurl', 'attributionenabled', 'attributiontext', 'attributionvisible', 'authmode', 'authnamespace', 'author', 'authoringapp', 'authoringappversion', 'authoringinfo', 'authorizedcrossorigindomains', 'autocloseenabled', 'autoclosemenu', 'autocollapse', 'autonavigate', 'autoopenenabled', 'autoselect', 'availablecreatetools', 'availablefields', 'average', 'avgrating', 'axis', 'azimuth', 'b', 'background', 'backgroundcolor', 'backgroundfillsymbol', 'bandcount', 'bandids', 'barcreatedfunction', 'baseitems', 'baselayers', 'baselayerviews', 'baselistitemcreatedfunction', 'basemapgallerygroupquery', 'basemaplegendvisible', 'basemaps', 'basemaptitle', 'bevelratio', 'bingkey', 'binglogo', 'binrange', 'bins', 'blendmode', 'blurradius', 'bookmarkcreationoptions', 'bookmarks', 'border', 'borderlinecolor', 'borderlinesize', 'breakpoints', 'breaks', 'browsertouchpanenabled', 'bufferspatialreference', 'cache', 'cachehint', 'calculationtype', 'callout', 'cancreate', 'candidates', 'canlistapps', 'canlistdata', 'canlistpreprovisioneditems', 'canprovisiondirectpurchase', 'cansearchpublic', 'cansharebingpublic', 'cansharepublic', 'cansigninarcgis', 'cansigninidp', 'canupdate', 'canzoomin', 'canzoomout', 'cap', 'capabilities', 'caption', 'cardinality', 'castshadows', 'catalogitems', 'catalogitemvisibilities', 'categories', 'center', 'centroid', 'children', 'childrensortable', 'classbreakinfos', 'classificationmethod', 'classname', 'clickfunction', 'clippingarea', 'clippingenabled', 'clustermaxsize', 'clusterminsize', 'clusterradius', 'codedvalues', 'collapsed', 'collapseenabled', 'collapseiconclass', 'collapsetooltip', 'collectionid', 'colorclassbreakinfos', 'colormap', 'colormapinfos', 'colormodulation', 'colorramp', 'colorsetsgroupquery', 'colorstops', 'colortexture', 'coloruniquevalueinfos', 'columnreorderingenabled', 'columns', 'commentsenabled', 'commitonmonthchange', 'components', 'composite', 'compressionquality', 'compressiontolerance', 'computegamma', 'connectionerror', 'connectionstatus', 'constraints', 'container', 'contains', 'content', 'contenttype', 'context', 'conversioninfo', 'conversions', 'coordinates', 'coordinatesegments', 'copyright', 'countrycode', 'coverageid', 'created', 'creategraphic', 'creationmode', 'creator', 'culture', 'currentdockposition', 'currentlocation', 'currentpattern', 'currentseason', 'currentstyleinfo', 'currentversion', 'custombaseurl', 'customlayerparameters', 'customparameters', 'data', 'datalinecreatedfunction', 'datalines', 'datatype', 'date', 'datefields', 'dateformat', 'dateorseason', 'datumtransformation', 'dayplaying', 'declaredclass', 'deconflictionstrategy', 'decoration', 'defaultbasemap', 'defaultbreaks', 'defaultcreateoptions', 'defaultcutoff', 'defaulteditoptions', 'defaultextent', 'defaultlabel', 'defaultpattern', 'defaultpopuptemplateenabled', 'defaultsources', 'defaultsymbol', 'defaulttargetfacilitycount', 'defaulttemplates', 'defaultupdateoptions', 'defaultvalue', 'defaultvectorbasemap', 'defaultzoomscale', 'definitionexpression', 'delimiter', 'demresolution', 'depth', 'description', 'destroyer', 'details', 'deviationunit', 'device', 'devices', 'dialog', 'digitseparator', 'dimensionname', 'direction', 'directions', 'directionslanguage', 'directionslengthunits', 'directionsoutputtype', 'directionsstylename', 'directionstimeattribute', 'directshadowsenabled', 'disabled', 'displaycoordinate', 'displayednumberoffeatures', 'displayfield', 'displayfieldname', 'displaytype', 'displayutcoffset', 'distance', 'distances', 'distanceunit', 'dockenabled', 'dockoptions', 'domain', 'domains', 'donotlocateonrestrictedelements', 'dotblendingenabled', 'dotvalue', 'doublesided', 'dpi', 'draggablesegmentsenabled', 'draglabel', 'drawingtool', 'dynamicdatasource', 'dynamicrangeadjustment', 'edges', 'edgesmemory', 'editable', 'editableitems', 'editfieldsinfo', 'editingenabled', 'editinginfo', 'editortype', 'effect', 'effectiveprintserviceurl', 'effectivestops', 'effectiveunits', 'elements', 'elevationinfo', 'email', 'emissivecolor', 'emissivetexture', 'enabled', 'enabledfocusmode', 'end', 'endfield', 'endtime', 'environment', 'errormessage', 'eueienabled', 'evaluatedvisibility', 'exactmatch', 'exceededtransferlimit', 'exclude', 'excludedbarcolor', 'excludedeffect', 'excludedlabelsvisible', 'excludedlayers', 'excludegroundsurface', 'excludesourcesfrompolygons', 'exifinfo', 'expanded', 'expandiconclass', 'expandtooltip', 'expiration', 'expires', 'exportedlinks', 'exportoptions', 'expression', 'expressioninfos', 'extendhow', 'extensionlength', 'extraparameters', 'faces', 'facilities', 'failures', 'family', 'fatalerror', 'feature', 'featurecount', 'featuredgroups', 'featureditemsgroupquery', 'featureformviewmodel', 'featureinfoformat', 'featureinfourl', 'featurenavigationenabled', 'featurereduction', 'features', 'featuretemplatesviewmodel', 'field', 'field1', 'field2', 'field3', 'fieldconfig', 'fieldconfigs', 'fielddelimiter', 'fieldinfos', 'fieldmap', 'fieldname', 'fieldnames', 'fields', 'fieldsindex', 'fieldtransformtype', 'filename', 'filter', 'filterblocks', 'filterenabled', 'filterfunction', 'filters', 'filtertext', 'findbestsequence', 'flowrepresentation', 'focus', 'focused', 'fontsurl', 'forcefeatureattributes', 'forceuserid', 'format', 'formats', 'formattedattributes', 'foundfieldname', 'fov', 'fromcolor', 'fullextent', 'fullextents', 'fullname', 'fulltimeextent', 'functionarguments', 'functionname', 'g', 'gallerytemplatesgroupquery', 'gamepad', 'gamma', 'gdbversion', 'geodesic', 'geodesicdistancethreshold', 'geolocationoptions', 'geometries', 'geometries1', 'geometries2', 'geometry1', 'geometry2', 'geometrydefinition', 'geometryprecision', 'geometryserviceurl', 'geometrytype', 'georssserviceurl', 'getresults', 'getsuggestions', 'globalid', 'globalids', 'gotolocationenabled', 'gotooverride', 'graphics', 'group', 'groupby', 'groupbyfieldsforstatistics', 'groupcategories', 'groupdisplay', 'halo', 'halocolor', 'halosize', 'handles', 'handlessyncedtoprimary', 'hasattributiondata', 'hascategoryschema', 'hasm', 'hasmultidimensions', 'hasnext', 'hasnextstep', 'hasportal', 'hasprevious', 'haspreviousstep', 'hasserver', 'hasz', 'having', 'heading', 'height', 'heightbreakpoint', 'heightmodel', 'heightmodelinfo', 'heightunit', 'helperservices', 'hiddenfields', 'highlightenabled', 'highlightonrowselectenabled', 'highlightoptions', 'hillshadetype', 'hint', 'hinttext', 'histogramconfig', 'histograms', 'historicmoment', 'homepagefeaturedcontent', 'homepagefeaturedcontentcount', 'horizontalalignment', 'hoveredchartposition', 'hoveredpoint', 'href', 'httpport', 'httpsport', 'iconclass', 'iconnumber', 'id', 'ignoreinvalidlocations', 'image', 'imagecoordinatesystem', 'imageformat', 'imageformats', 'imagemaxheight', 'imagemaxwidth', 'imagespatialreference', 'imagetransparency', 'impedanceattribute', 'incidents', 'include', 'includedbarcolor', 'includedefaultsources', 'includedefaulttemplates', 'includedeffect', 'includedreturns', 'includetime', 'initialstate', 'initialviewproperties', 'input', 'inputcreatedfunction', 'inputfields', 'inputformatfunction', 'inputparsefunction', 'interacting', 'interpolation', 'intersectedgraphic', 'intersectedlocation', 'interval', 'ipcntrycode', 'isadmin', 'isaggregate', 'isempty', 'isgeographic', 'isinverse', 'isinvitationonly', 'islayer', 'isorganization', 'isportal', 'isreadonly', 'isscaledriven', 'isselfintersecting', 'isslice', 'isstandardized', 'istable', 'iswebmercator', 'iswgs84', 'iswrappable', 'itemcontrol', 'itemdelimiter', 'itemid', 'itemrenderingrule', 'items', 'itemurl', 'jobid', 'jobstatus', 'join', 'kerning', 'key', 'keyfield', 'keyfieldinrelationshiptable', 'keyproperties', 'keywords', 'kmlserviceurl', 'label', 'labelexpression', 'labelexpressioninfo', 'labelformatfunction', 'labelinginfo', 'labelinputsenabled', 'labelplacement', 'labels', 'labelsvisible', 'lasteditinfo', 'lasteditinfoenabled', 'lastroute', 'latitude', 'latitudefield', 'layer', 'layerdefinitions', 'layerid', 'layerids', 'layerinfos', 'layername', 'layeroption', 'layeroptions', 'layerperformanceinfos', 'layers', 'layertemplatesgroupquery', 'layerviews', 'layout', 'layoutoptions', 'leadinglayers', 'legendelements', 'legendenabled', 'legendoptions', 'legendurl', 'length', 'level', 'levelvalue', 'licenseinfo', 'lighting', 'lineheight', 'linesymbol', 'linewidth', 'linkurl', 'listitemcreatedfunction', 'listmode', 'loaded', 'loaderror', 'loadstatus', 'loadwarnings', 'localdate', 'locale', 'locationenabled', 'locationsymbol', 'locationtype', 'lockrasterids', 'lods', 'log', 'longitude', 'longitudefield', 'loop', 'm', 'mapextent', 'marker', 'mask', 'maskisalpha', 'material', 'max', 'maxallowableoffset', 'maxdatavalue', 'maxdeviation', 'maximumnumberoffeatures', 'maximumnumberoffeaturesexceeded', 'maxinlineactions', 'maxinputlength', 'maxitemcount', 'maxlength', 'maxpercent', 'maxpixelintensity', 'maxreconnectionattempts', 'maxreconnectioninterval', 'maxrecordcountfactor', 'maxresults', 'maxscale', 'maxscalelimit', 'maxsegmentlength', 'maxsize', 'maxslidervalue', 'maxstops', 'maxsuggestions', 'maxtokenexpirationminutes', 'maxvalue', 'measurementlabel', 'mediainfos', 'memory', 'menu', 'menuconfig', 'mergedgeometry', 'mergesimilarpolygonranges', 'message', 'messages', 'metallic', 'metallicroughnesstexture', 'method', 'min', 'mindatavalue', 'minlength', 'minpercent', 'minpixelintensity', 'minscale', 'minscalelimit', 'minsize', 'minslidervalue', 'minsuggestcharacters', 'mintimeuntilexpiration', 'minvalue', 'miterlimit', 'mmax', 'mmin', 'mode', 'modelname', 'modifications', 'modified', 'momentumenabled', 'mosaicrule', 'mousewheelzoomenabled', 'multidimensionaldefinition', 'multidimensionalinfo', 'multipatchoption', 'multipleconversions', 'multipleselectionenabled', 'name', 'native', 'navigating', 'navigation', 'navigationconstraint', 'navigationmode', 'networklink', 'nextbasemap', 'nextqueryparams', 'nodata', 'nodatainterpretation', 'nodatavalue', 'normalizationfield', 'normalizationtotal', 'normalizationtype', 'normalizefield', 'normaltexture', 'nullable', 'num', 'numberofpoints', 'numberofstandarddeviations', 'numclasses', 'numcomments', 'numratings', 'numviews', 'oauthstate', 'objectid', 'objectidfield', 'objectids', 'observer', 'occlusiontexture', 'offsetdistance', 'offsethow', 'offsetunit', 'onstatisticfield', 'opacity', 'open', 'operation', 'operationalitems', 'order', 'orderbyfields', 'orgid', 'orientation', 'orientationinfo', 'origin', 'outfields', 'outline', 'outputgeometryprecision', 'outputgeometryprecisionunits', 'outputlines', 'outputmax', 'outputmin', 'outputpixeltype', 'outputpolygons', 'outscale', 'outspatialreference', 'outsr', 'outstatisticfieldname', 'outstatistics', 'overlaplines', 'overlappolygons', 'overwriteactions', 'owner', 'ownerfolder', 'padding', 'panel', 'parametervalues', 'parent', 'parentglobalid', 'parentobjectid', 'path', 'paths', 'pattern', 'pendingpromisescount', 'performanceinfo', 'phase', 'pixelfilter', 'pixels', 'pixelsize', 'pixelsizefactor', 'pixelsizepower', 'pixeltype', 'placeholder', 'placement', 'places', 'playrate', 'playspeedmultiplier', 'pointbarriers', 'points', 'pointsizealgorithm', 'pointsperinch', 'pointsymbol', 'polygonbarriers', 'polygons', 'polygonsymbol', 'polylinebarriers', 'polylines', 'polylinesymbol', 'popup', 'popupcallbackurl', 'popupenabled', 'popuptemplate', 'popupwindowfeatures', 'portalhostname', 'portalitem', 'portalmode', 'portalproperties', 'portalurl', 'position', 'precision', 'preferredview', 'prefix', 'presentation', 'preservefirststop', 'preservelaststop', 'preservescale', 'preserveurlhash', 'primaryhandleenabled', 'printserviceurl', 'processextent', 'processspatialreference', 'profile', 'profilerotation', 'profiles', 'progress', 'promisecount', 'promises', 'properties', 'prototype', 'purgeoptions', 'quality', 'qualityprofile', 'quantizationparameters', 'query', 'queryable', 'querygeometry', 'queryparams', 'r', 'radius', 'radiusunit', 'range', 'rangelabelinputsenabled', 'rangelabelsvisible', 'rangetype', 'rangevalues', 'rasterattributetablefieldprefix', 'rasterfields', 'rating', 'ratio', 'ready', 'recommendedscales', 'referenceitems', 'referencelayers', 'referencelayerviews', 'referencelistitemcreatedfunction', 'referencescale', 'refreshinterval', 'region', 'relatedrecordsinfo', 'relatedtableid', 'relation', 'relationparameter', 'relationshipid', 'relationships', 'relationshiptableid', 'renderingrule', 'renderingrules', 'request', 'requestdelay', 'required', 'requiredexpression', 'resampling', 'resizable', 'resizealign', 'resizing', 'resolution', 'resource', 'respectlayervisibility', 'restrictionattributes', 'restrictuturns', 'resturl', 'resultgraphic', 'resultgraphicenabled', 'results', 'resultsymbol', 'returnbarriers', 'returncatalogitems', 'returncentroid', 'returndirections', 'returndistinctvalues', 'returnexceededlimitfeatures', 'returnfacilities', 'returnfieldname', 'returngeometry', 'returnincidents', 'returnm', 'returnmetadata', 'returnpixelvalues', 'returnpointbarriers', 'returnpolygonbarriers', 'returnpolylinebarriers', 'returnquerygeometry', 'returnroutes', 'returnstops', 'returntopmostraster', 'returntype', 'returnunformattedvalues', 'returnz', 'rings', 'role', 'roleid', 'roll', 'rotated', 'rotation', 'rotationtype', 'rotatorpanels', 'roughness', 'route', 'routeid', 'routename', 'routes', 'routeserviceurl', 'routesymbol', 'samples', 'scale', 'scaleenabled', 'scaleexpression', 'scaleexpressiontitle', 'scalepreserved', 'scalingtype', 'score', 'screenshots', 'screensizeperspectiveenabled', 'searchallenabled', 'searchfields', 'searchproperties', 'searchtemplate', 'searchterm', 'searchtext', 'seed', 'selected', 'selectedfeature', 'selectedfeatureindex', 'selectedfeaturewidget', 'selecteditems', 'selectedresult', 'selectedsuggestion', 'selectedtravelmode', 'selectionenabled', 'series', 'server', 'serviceareapolygons', 'serviceareapolylines', 'servicedefinitionexpression', 'servicedescription', 'servicemode', 'servicerasterinfo', 'shading', 'shape', 'shortlivedtokenvalidity', 'showhomepagedescription', 'showlabels', 'showmoreresultsopen', 'shownodatarecords', 'showrelatedrecords', 'sigmoidstrengthlevel', 'singlelinefieldname', 'size', 'sketchviewmodel', 'sliderviewmodel', 'slides', 'snaponclickenabled', 'snappingoptions', 'snippet', 'sortable', 'sortfield', 'sortorder', 'sortvalue', 'source', 'sourcejson', 'sources', 'sourceurl', 'sourceversion', 'spatialreference', 'spatialreferences', 'spatialrelationship', 'spinnerenabled', 'splitlinesatbreaks', 'splitpolygonsatbreaks', 'sqlformat', 'ssl', 'standarddeviation', 'standarddeviationcount', 'standarddeviationinterval', 'starsenabled', 'start', 'started', 'startfield', 'starttime', 'starttimeisutc', 'state', 'stationary', 'statisticparameters', 'statistics', 'statistictype', 'statusindicatorsvisible', 'stepid', 'steps', 'stops', 'stopsymbols', 'stretchtype', 'stringfieldoption', 'strings', 'style', 'styleid', 'stylename', 'styleorigin', 'styles', 'styleurl', 'subdomains', 'sublayerids', 'sublayers', 'sublayerviews', 'suffix', 'suggestiondelay', 'suggestions', 'suggestionsenabled', 'suggestiontemplate', 'summarystatistics', 'supportingwidgetdefaults', 'supportshostedservices', 'supportsresizeattachments', 'surfacecolor', 'suspended', 'symbol', 'symbollayers', 'symbolsetsgroupquery', 'symboltilesize', 'syncing', 'tableitems', 'tables', 'tags', 'target', 'targetgeometry', 'targets', 'templateoptions', 'templates', 'templatesgroupquery', 'templatesinfo', 'terrainmemory', 'text', 'theme', 'thumbcreatedfunction', 'thumbnail', 'thumbnailurl', 'thumbsconstrained', 'tickconfigs', 'tileinfo', 'tilematrixsetid', 'tilematrixsets', 'tiles', 'tileservers', 'tilt', 'tiltdirection', 'tiltenabled', 'timeattribute', 'timeinfo', 'timeofday', 'timeofdayusage', 'timeoffset', 'timesliderposition', 'timeslidersteps', 'timevisible', 'title', 'titlevisible', 'tocolor', 'token', 'tokenserviceurl', 'tokenvalidity', 'tolerance', 'tooltip', 'tooltipfield', 'total', 'totaldrivetime', 'totallength', 'totalmemory', 'totalnumberoffeatures', 'totaltime', 'trackelement', 'trackidfield', 'tracking', 'trailinglayers', 'transformation', 'transformforward', 'transparent', 'traveldirection', 'travelmode', 'travelmodes', 'trimextendto', 'trimouterpolygon', 'trimpolygondistance', 'trimpolygondistanceunits', 'type', 'typeidfield', 'typekeywords', 'types', 'ui', 'unionresults', 'uniquevalueinfos', 'unit', 'unitoptions', 'univariatesymbolstyle', 'univariatetheme', 'updatebasemapscallback', 'updatedelay', 'updategraphics', 'updateinterval', 'updateongraphicclick', 'updating', 'url', 'urlkey', 'urltemplate', 'usecodedvalues', 'usedmemory', 'usegamma', 'useheadingenabled', 'usehierarchy', 'user', 'usercontenturl', 'userid', 'username', 'usesigninpage', 'usestandardizedquery', 'usesymbolvalue', 'usetimewindows', 'usevectorbasemaps', 'useviewtime', 'utcoffset', 'valid', 'validpixelcount', 'value', 'valueexpression', 'valueexpressiontitle', 'valuerepresentation', 'values', 'valuetype', 'valueunit', 'variablename', 'vectorbasemapgallerygroupquery', 'version', 'vertcrs', 'vertexattributes', 'verticalalignment', 'verticaloffset', 'vertices', 'view', 'viewingmode', 'viewmodel', 'views', 'visibilityexpression', 'visibilitymode', 'visible', 'visibleatcurrentscale', 'visibleelements', 'visiblelayers', 'visualvariables', 'waitingforcontent', 'waitingforresult', 'waterbodysize', 'wavedirection', 'wavestrength', 'webmercator', 'websocketurl', 'weight', 'wgs84', 'where', 'widgets', 'width', 'widthbreakpoint', 'withinviewenabled', 'wkid', 'wkt', 'workers', 'wrap', 'x', 'xmax', 'xmin', 'xoffset', 'xscale', 'y', 'yearplaying', 'ymax', 'ymin', 'yoffset', 'yscale', 'z', 'zfactor', 'zmax', 'zmin', 'zoom', 'zoomingenabled', 'zoomoptions', 'zoomscale'
    ],
    WatchEvents: [
        'after-add', 'after-changes', 'after-remove', 'before-add', 'before-changes', 'before-remove', 'blur', 'bookmark-edit', 'bookmark-select', 'change', 'changed', 'click', 'complete', 'create', 'credential-create', 'cursor-update', 'data-received', 'delete', 'destroy', 'dialog-create', 'double-click', 'drag', 'draw-complete', 'edits', 'go', 'hold', 'immediate-click', 'immediate-double-click', 'key-down', 'key-up', 'layerview-create', 'layerview-create-error', 'layerview-destroy', 'locate-error', 'max-change', 'min-change', 'mouse-wheel', 'pointer-down', 'pointer-enter', 'pointer-leave', 'pointer-move', 'pointer-up', 'redo', 'resize', 'search-blur', 'search-clear', 'search-complete', 'search-focus', 'search-start', 'segment-drag', 'select', 'select-bookmark', 'select-result', 'selection-change', 'submit', 'suggest-complete', 'suggest-start', 'thumb-change', 'thumb-drag', 'toggle', 'token-change', 'track-error', 'trigger-action', 'undo', 'update', 'update-rate', 'value-change', 'vertex-add', 'vertex-remove'
    ]
};

export default MapConfig;