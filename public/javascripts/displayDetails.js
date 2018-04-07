/**
 * Created by rxh160530 on 3/6/2018.
 */
"use strict";

var app=angular.module("info",[]);

app.controller("infoCtrl", ['$scope','$http',function($scope, $http){
    $http.get('https://' + username + '.carto.com/api/v2/sql/?format=geojson&q=' + povertyquery + '&apikey=' + apikey).success(function(response){
        var outputlist = [];
        response.features.forEach(function (ft) {
            //console.log(ft.properties);
            outputlist.push({
                basepop: ft.properties.basepop,
                cartodb_id: ft.properties.cartodb_id,
                cbasepop: ft.properties.cbasepop,
                cpovpop: ft.properties.cpovpop,
                geography:ft.properties.geography,
                geolev: ft.properties.geolev,
                id: ft.properties.id,
                id2: ft.properties.id2,
                pctcpoor: ft.properties.pctcpoor,
                pctcpoor2: ft.properties.pctcpoor2,
                povpop: ft.properties.povpop,
                year: ft.properties.year
            });
        });
        function removeDuplicates_geo(arr){
            var unique_arr=[];
            var distinct={};
            for(var i=0;i<arr.length;i++){
                if(distinct[arr[i].geography]==undefined)
                {
                    distinct[arr[i].geography]=0;
                    unique_arr.push(arr[i].geography);
                }
            }

            return unique_arr;
        }
        function removeDuplicates(arr){
            var unique_arr=[];
            var distinct={};
            for(var i=0;i<arr.length;i++){
                if(distinct[arr[i]]==undefined)
                {
                    distinct[arr[i]]=0;
                    unique_arr.push(arr[i]);
                }
            }

            return unique_arr;
        }

        var resList=removeDuplicates_geo(outputlist);
        $scope.geoitems = {
            geography: resList
        };
        var yearArr_base=[];
        var yearArr_comp=[];
        $('#base').on('change',function () {
            var value=$(this).val();
            yearArr_base=[];
            //console.log(value);
            for(var i=0;i<outputlist.length;i++){
                if(outputlist[i].geography==value){
                    yearArr_base.push(outputlist[i].year);
                }
            }
            switch(value){
                case 'United States':break;
                case 'Texas': break;
                case 'Dallas County, Texas': break;
                case 'Dallas city, Texas': break;
                case 'Dallas-Fort Worth-Arlington, TX Metro Area': break;
                case 'ZCTA5 75001': break;
                case 'ZCTA5 75006': break;
                case 'ZCTA5 75007': break;
                case 'ZCTA5 75019': break;
                case 'ZCTA5 75038': break;
                case 'ZCTA5 75039': break;
                case 'ZCTA5 75040': break;
                case 'ZCTA5 75041': break;
                case 'ZCTA5 75042': break;
                case 'ZCTA5 75043': break;
                case 'ZCTA5 75044': break;
                case 'ZCTA5 75048': break;
                case 'ZCTA5 75050': break;
                case 'ZCTA5 75051': break;
                case 'ZCTA5 75052': break;
                case 'ZCTA5 75054': break;
                case 'ZCTA5 75060': break;
                case 'ZCTA5 75061': break;
                case 'ZCTA5 75062': break;
                case 'ZCTA5 75063': break;
                case 'ZCTA5 75067': break;
                case 'ZCTA5 75080': break;
                case 'ZCTA5 75081': break;
                case 'ZCTA5 75082': break;
                case 'ZCTA5 75088': break;
                case 'ZCTA5 75089': break;
                case 'ZCTA5 75098': break;
                case 'ZCTA5 75104': break;
                case 'ZCTA5 75115': break;
                case 'ZCTA5 75116': break;
                case 'ZCTA5 75125': break;
                case 'ZCTA5 75134': break;
                case 'ZCTA5 75137': break;
                case 'ZCTA5 75141': break;
                case 'ZCTA5 75146': break;
                case 'ZCTA5 75149': break;
                case 'ZCTA5 75150': break;
                case 'ZCTA5 75154': break;
                case 'ZCTA5 75159': break;
                case 'ZCTA5 75172': break;
                case 'ZCTA5 75180': break;
                case 'ZCTA5 75181': break;
                case 'ZCTA5 75182': break;
                case 'ZCTA5 75201': break;
                case 'ZCTA5 75202': break;
                case 'ZCTA5 75203': break;
                case 'ZCTA5 75204': break;
                case 'ZCTA5 75205': break;
                case 'ZCTA5 75206': break;
                case 'ZCTA5 75207': break;
                case 'ZCTA5 75208': break;
                case 'ZCTA5 75209': break;
                case 'ZCTA5 75210': break;
                case 'ZCTA5 75211': break;
                case 'ZCTA5 75212': break;
                case 'ZCTA5 75214': break;
                case 'ZCTA5 75215': break;
                case 'ZCTA5 75216': break;
                case 'ZCTA5 75217': break;
                case 'ZCTA5 75218': break;
                case 'ZCTA5 75219': break;
                case 'ZCTA5 75220': break;
                case 'ZCTA5 75223': break;
                case 'ZCTA5 75224': break;
                case 'ZCTA5 75225': break;
                case 'ZCTA5 75226': break;
                case 'ZCTA5 75227': break;
                case 'ZCTA5 75228': break;
                case 'ZCTA5 75229': break;
                case 'ZCTA5 75230': break;
                case 'ZCTA5 75231': break;
                case 'ZCTA5 75232': break;
                case 'ZCTA5 75233': break;
                case 'ZCTA5 75234': break;
                case 'ZCTA5 75235': break;
                case 'ZCTA5 75236': break;
                case 'ZCTA5 75237': break;
                case 'ZCTA5 75238': break;
                case 'ZCTA5 75240': break;
                case 'ZCTA5 75241': break;
                case 'ZCTA5 75243': break;
                case 'ZCTA5 75244': break;
                case 'ZCTA5 75246': break;
                case 'ZCTA5 75247': break;
                case 'ZCTA5 75248': break;
                case 'ZCTA5 75249': break;
                case 'ZCTA5 75251': break;
                case 'ZCTA5 75252': break;
                case 'ZCTA5 75253': break;
                case 'ZCTA5 75254': break;
                case 'ZCTA5 75270': break;
                case 'ZCTA5 75287': break;
                case 'ZCTA5 75390': break;
                case 'ZCTA5 76051': break;
                case 'ZCTA5 76155': break;
            }
        });
        $('#compare').on('change',function () {
            var value = $(this).val();
            //console.log(value);
            for (var i = 0; i < outputlist.length; i++) {
                if (outputlist[i].geography == value) {
                    yearArr_base.push(outputlist[i].year);
                }
            }
            var year=removeDuplicates(yearArr_base);

            $scope.yearList={
                year:year
            };

        });

    });
}]);
