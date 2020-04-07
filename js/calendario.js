
        function addZero(i) {
            if (i < 10) {
                i = '0' + i;
            }
            return i;
        }

        var hoy = new Date();
        var dd = hoy.getDate();
        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        var mm = hoy.getMonth() + 1;
        var yyyy = hoy.getFullYear();

        dd = addZero(dd);
        mm = addZero(mm);

        $(document).ready(function() {
            $('#calendar').fullCalendar({
                header: {
                    left: 'prev,next',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay'
                },
                defaultDate: yyyy + '-' + mm + '-' + dd,
                buttonIcons: true, // show the prev/next text
                weekNumbers: false,
                editable: true,
                eventLimit: true, // allow "more" link when too many events 
                events: [{

                        title: 'INICIO DE RECEPCIÓN DE : ',
                        /*  image: '<img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Smiley face" > ',*/
                        description: '* Reconocimientos de saberes con o sin evidencia de institución educativa. * Cambios de programas y módulos. * Solicitudes de recuperación de logros extemporaneos',
                        start: yyyy + '-' + mm + '-13',
                        end: yyyy + '-' + mm + '-15',


                        color: '#3A87AD',
                        textColor: '#ffffff',
                    },
                    {
                        title: 'ENTREGA DE INVITACIONES',
                        description: 'ENTREGA DE INVITACIONES - CEREMONIA DE GRADOS B2019',
                        start: yyyy + '-' + mm + '-25',
                        color: '#3A87AD',
                        textColor: '#ffffff',

                    },
                    {
                        title: ' INICIO DE PLANEACIÓN ACADÉMICA SEMESTRE A2020',
                        description: 'INICIO DE PLANEACIÓN ACADÉMICA SEMESTRE A2020',
                        start: yyyy + '-' + mm + '-25',
                        color: '#3A87AD',
                        textColor: '#ffffff',

                    },

                    {
                        title: ' PLANEACIÓN ACADÉMICA',
                        description: ' PLANEACIÓN ACADÉMICA SEMESTRE A2020',
                        start: yyyy + '-' + mm + '-27',
                        end: yyyy + '-' + mm + '-31',
                        color: '#3A87AD',
                        textColor: '#ffffff',
                        botton:'<a href="https://www.google.com/" class="btn btn-secondary" > Más información </a>',

                    },



                ],
                /*
                dayClick: function (date, jsEvent, view) {
                    alert('Has hecho click en: '+ date.format());
                },
         
                                    
                */
                eventClick: function(calEvent, jsEvent, view) {
                    $('#event-title').text(calEvent.title);
                    $('#event-description').html(calEvent.description);
                    $('#event-img').html(calEvent.image);
                    $('#boton_url').html(calEvent.botton);
                    $('#modal-event').modal();
                },
            });
        });
