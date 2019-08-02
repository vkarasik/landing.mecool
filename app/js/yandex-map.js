window.addEventListener('DOMContentLoaded', function () {
    var shops = document.getElementsByClassName('shop__location');
    for (i = 0; i < shops.length; i++) {
        shops[i].addEventListener('click', function (e) {
            e.preventDefault();
            var target = e.target.id;
            var targetObj = addressData[target];
            myMap.geoObjects.removeAll();
            for (i = 0; i < targetObj.length; i++) {
                var mark = new ymaps.Placemark(addressData[target][i].coordinates, addressData[target][i].properties,
                    addressData[target][i].options);
                myMap.geoObjects.add(mark);
            }
        })
    };

    /* var allshops = document.getElementById('allshops');
    allshops.addEventListener('click', function (e) {
        e.preventDefault();
        placeMarks();
    }); */

    ymaps.ready(init);
    // Инициализация карты
    function init() {
        myMap = new ymaps.Map('map', {
            center: [53.902496, 27.561481],
            zoom: [11],
            controls: ['zoomControl'],
            scroll: false
        });
        myMap.behaviors.disable('scrollZoom');
        placeMarks();
    }

    function placeMarks() {
        for (key in addressData) {
            for (i = 0; i < addressData[key].length; i++) {
                var mark = new ymaps.Placemark(addressData[key][i].coordinates, addressData[key][i].properties,
                    addressData[key][i].options);
                myMap.geoObjects.add(mark);
            }
        }
    }

    var addressData = {
        "xistore": [{
                "coordinates": [53.890224, 27.554375],
                "properties": {
                    "hintContent": "Ксистор",
                    "balloonContent": "ул. Бобруйская, д. 6, ст. м. «Площадь Ленина» (1 этаж, возле главного входа) (ТРЦ \"Galileo\")"
                },
                "options": {
                    "iconLayout": "default#image",
                    "iconImageHref": "../img/icon_pin.svg",
                    "iconImageSize": [35, 35]
                }
            },
            {
                "coordinates": [53.859605, 27.674022],
                "properties": {
                    "hintContent": "Ксистор",
                    "balloonContent": "Партизанский пр-т, д. 150А, ст. м. «Могилевская» (2 этаж, остров)"
                },
                "options": {
                    "iconLayout": "default#image",
                    "iconImageHref": "../img/icon_pin.svg",
                    "iconImageSize": [35, 35]
                }
            },
            {
                "coordinates": [53.908649, 27.432321],
                "properties": {
                    "hintContent": "Ксистор",
                    "balloonContent": "ул. Притыцкого, д. 156, ст. м. «Каменная горка» (напротив 33–34 кассы гипермаркета)"
                },
                "options": {
                    "iconLayout": "default#image",
                    "iconImageHref": "../img/icon_pin.svg",
                    "iconImageSize": [35, 35]
                }
            },
            {
                "coordinates": [53.858474, 27.476761],
                "properties": {
                    "hintContent": "Ксистор",
                    "balloonContent": "пр-т Дзержинского, д. 106, ст. м. «Петровщина»"
                },
                "options": {
                    "iconLayout": "default#image",
                    "iconImageHref": "../img/icon_pin.svg",
                    "iconImageSize": [35, 35]
                }
            },
            {
                "coordinates": [53.840127, 27.568775],
                "properties": {
                    "hintContent": "Ксистор",
                    "balloonContent": "микрорайон Лошица, улица Иосифа Гошкевича, 3"
                },
                "options": {
                    "iconLayout": "default#image",
                    "iconImageHref": "../img/icon_pin.svg",
                    "iconImageSize": [35, 35]
                }
            },
            {
                "coordinates": [53.924861, 27.598482],
                "properties": {
                    "hintContent": "Ксистор",
                    "balloonContent": "ул. Сурганова, д. 20, ст. м. «Академия наук»"
                },
                "options": {
                    "iconLayout": "default#image",
                    "iconImageHref": "../img/icon_pin.svg",
                    "iconImageSize": [35, 35]
                }
            }

        ],
        "xiaomi-store": [{
            "coordinates": [53.916249, 27.579519],
            "properties": {
                "hintContent": "Xiaomi-Store",
                "balloonContent": "Минск, ул. Веры Хоружей 1А, ТЦ \"Силуэт\", цокольный (подземный) этаж, 1 ряд 12 место (сектор В)"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }],
        "sila": [{
            "coordinates": [53.875351, 27.498212],
            "properties": {
                "hintContent": "Электросила",
                "balloonContent": "Минск, ТЦ «ГЛОБО», ул. Уманская, 54, этаж 1"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.875159, 27.594605],
            "properties": {
                "hintContent": "Электросила",
                "balloonContent": "Минск, пр. Рокоссовского, 2, этаж 2"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.964386, 27.536224],
            "properties": {
                "hintContent": "Электросила",
                "balloonContent": "Минск, ТЦ «ALL», Долгиновский тракт, 178, этаж 1"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.964023, 27.624211],
            "properties": {
                "hintContent": "Электросила",
                "balloonContent": "Минск, ТРЦ «ЭКСПОБЕЛ», пересечение Логойского тракта и МКАД, этаж 2"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.946212, 27.687953],
            "properties": {
                "hintContent": "Электросила",
                "balloonContent": "Минск, ТЦ «СПЕКТР», пр-т Независимости, 179, этаж 2"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.9087782, 27.4699402],
            "properties": {
                "hintContent": "Электросила",
                "balloonContent": "Минск, ТЦ «СКАЛА», ул. Петра Глебки, 5, этаж 2"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.860058, 27.673641],
            "properties": {
                "hintContent": "Электросила",
                "balloonContent": "Минск, ТЦ «МОМО», пр-т Партизанский, 150-А, этаж 1"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.905339, 27.434417],
            "properties": {
                "hintContent": "Электросила",
                "balloonContent": "Минск, ТЦ «МАТЕРИК», ул. Притыцкого, 101"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.890224, 27.554375],
            "properties": {
                "hintContent": "Электросила",
                "balloonContent": "Минск, ТРЦ «ГАЛИЛЕО», ул. Бобруйская, 6, этаж 3"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.927013, 27.509846],
            "properties": {
                "hintContent": "Электросила",
                "balloonContent": "Минск, ТРЦ «PALAZZO», ул. Тимирязева, 74A"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.914246, 27.580518],
            "properties": {
                "hintContent": "Электросила",
                "balloonContent": "Минск, ул. Красная, 22"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }],
        "21vek": [{
                "coordinates": [53.875071, 27.498212],
                "properties": {
                    "hintContent": "21 Век (точка самовывоза)",
                    "balloonContent": "Минск, ул. Уманская 54, ТЦ «Глобо», 2-й этаж"
                },
                "options": {
                    "iconLayout": "default#image",
                    "iconImageHref": "../img/icon_pin.svg",
                    "iconImageSize": [35, 35]
                }
            },
            {
                "coordinates": [53.951760, 27.681487],
                "properties": {
                    "hintContent": "21 Век (точка самовывоза)",
                    "balloonContent": "Минск, ул. Ложинская 22, ТЦ «Дмитриев Кирмаш», 2-й этаж"
                },
                "options": {
                    "iconLayout": "default#image",
                    "iconImageHref": "../img/icon_pin.svg",
                    "iconImageSize": [35, 35]
                }
            },
            {
                "coordinates": [53.878782, 27.591574],
                "properties": {
                    "hintContent": "21 Век (точка самовывоза)",
                    "balloonContent": "Минск, ул. Тростенецкая, 17"
                },
                "options": {
                    "iconLayout": "default#image",
                    "iconImageHref": "../img/icon_pin.svg",
                    "iconImageSize": [35, 35]
                }
            }
        ],
        "patio": [{
            "coordinates": [53.842417, 27.529213],
            "properties": {
                "hintContent": "5 Элемент",
                "balloonContent": "Минск, ул. Корженевского, 26 (ТЦ \"Корона\")"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.925539, 27.516376],
            "properties": {
                "hintContent": "5 Элемент",
                "balloonContent": "Минск, пр. Победителей 65/1 (ТЦ \"Замок\")"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.93638, 27.673186],
            "properties": {
                "hintContent": "5 Элемент",
                "balloonContent": "Минск, пр. Независимости, 154 (ТЦ \"Корона\")"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.908018, 27.527318],
            "properties": {
                "hintContent": "5 Элемент",
                "balloonContent": "Минск, ул. Кальварийская, 24 (ТЦ «Корона»)"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.925317725288, 27.449469566345],
            "properties": {
                "hintContent": "5 Элемент",
                "balloonContent": "Минск, ул. Голубка, 2 (ТЦ «Бонус»)"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.876340565935, 27.465176582336],
            "properties": {
                "hintContent": "5 Элемент",
                "balloonContent": "Минск, ул. Горецкого, 2 (ТЦ «Гиппо»)"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.965705284332, 27.644562721252],
            "properties": {
                "hintContent": "5 Элемент",
                "balloonContent": "Минск, д. Боровая, 7а (ТЦ «Боро»)"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.921324836435, 27.581251859665],
            "properties": {
                "hintContent": "5 Элемент",
                "balloonContent": "Минск, ул. Кульман, 14"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.871609220565, 27.568779587746],
            "properties": {
                "hintContent": "5 Элемент",
                "balloonContent": "Минск, ул. Маяковского, 146"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.883626296859, 27.681577205658],
            "properties": {
                "hintContent": "5 Элемент",
                "balloonContent": "Минск, ул. Нестерова, 49 (Гипермаркет «Евроопт»)"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.908522273119, 27.548582553864],
            "properties": {
                "hintContent": "5 Элемент",
                "balloonContent": "Минск, пр. Победителей, 9 (ТРЦ «Галерея Минск»)"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.93355501058, 27.651987075806],
            "properties": {
                "hintContent": "5 Элемент",
                "balloonContent": "Минск, ул. Мстиславца, 11 (ТЦ «Dana Mall»)"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.908649, 27.432321],
            "properties": {
                "hintContent": "5 Элемент",
                "balloonContent": "Минск, ул. Притыцкого, 156 (ТЦ «GreenCity»)"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }, {
            "coordinates": [53.861844037121, 27.480097040534],
            "properties": {
                "hintContent": "5 Элемент",
                "balloonContent": "Минск, пр. Дзержинского, 104 (ТЦ «Титан»)"
            },
            "options": {
                "iconLayout": "default#image",
                "iconImageHref": "../img/icon_pin.svg",
                "iconImageSize": [35, 35]
            }
        }]
    }
})