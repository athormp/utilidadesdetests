/*******************************************************************************
 * Copyright (c) 2013, 2016 Prepartic and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *******************************************************************************/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 168 A�o de creaci�n de pregunta: 2016
 questions[0]= "1)  En relaci&oacute;n la conectividad desde dispositivos m&oacute;viles en Europa";
 choices[0]= new Array();
 choices[0][0] = "A partir de 15 de Julio de 2017 los operadores solo podr&aacute;n cobrar un extra adicional m&aacute;ximo 1 &euro; /min en llamadas de voz, en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[0][1] = "No existe regulaci&oacute;n sobre el roaming en la UE, sino sobre la portabilidad, que ser&aacute; prohibida a partir del 15 de Julio de 2017.";
 choices[0][2] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[0][3] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de portabilidad al viajar a otro pa&iacute;s de la UE.";
 answers[0] = choices[0][2];
 units[0] = "19";
 comments[0] = "Id Pregunta: 168. https://ec.europa.eu/digital-single-market/en/roaming";


//  Id pregunta: 161 A�o de creaci�n de pregunta: 2016
 questions[1]= "2)  Se&ntilde;alar cu&aacute;l NO es uno de los principios del Plan de Acci&oacute;n de Administraci&oacute;n Electr&oacute;nica 2016-2020";
 choices[1]= new Array();
 choices[1][0] = "Principio de solo una vez";
 choices[1][1] = "Apertura y transparencia";
 choices[1][2] = "Confianza y seguridad";
 choices[1][3] = "Estandarizaci&oacute;n de forma predeterminada";
 answers[1] = choices[1][3];
 units[1] = "19";
 comments[1] = "Id Pregunta: 161. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Junio/Noticia-2016-06-02-Plan-accion-administracion-electronica-2016-2020.html#.WCjvuWrhDIU";


//  Id pregunta: 596 A�o de creaci�n de pregunta: 2016
 questions[2]= "3)  &iquest;Qui&eacute;n supervisa la elaboraci&oacute;n y ejecutaci&oacute;n de los Planes de Acci&oacute;n Sectoriales?";
 choices[2]= new Array();
 choices[2][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[2][1] = "Las CMADs";
 choices[2][2] = "Ambas son correctas.";
 choices[2][3] = "Ninguna es correcta";
 answers[2] = choices[2][2];
 units[2] = "19";
 comments[2] = "Id Pregunta: 596. Estrategia TIC";


//  Id pregunta: 577 A�o de creaci�n de pregunta: 2016
 questions[3]= "4)  &iquest;Cu&aacute;ndo fue aprobada la Estrategia TIC?";
 choices[3]= new Array();
 choices[3][0] = "El 2 de Octubre de 2015";
 choices[3][1] = "El 15 de Septiembre de 2015";
 choices[3][2] = "El 1 de Octubre de 2015";
 choices[3][3] = "El 5 de Octubre de 2015";
 answers[3] = choices[3][0];
 units[3] = "19";
 comments[3] = "Id Pregunta: 577. Estrategia TIC";


//  Id pregunta: 578 A�o de creaci�n de pregunta: 2016
 questions[4]= "5)  &iquest;Qui&eacute;n elabor&oacute; y aprob&oacute; la Estrategia TIC?.";
 choices[4]= new Array();
 choices[4][0] = "Fue elaborada y aprobada por la CETIC";
 choices[4][1] = "Fue elaborada por la CETIC y aprobada por el gobierno";
 choices[4][2] = "Fue elaborada por el gobierno y aprobada por la CETIC";
 choices[4][3] = "Fue elaborada por la CETIC y aprobada por el MAFP (Ministerio de Administraciones y Funci&oacute;n P&uacute;blica)";
 answers[4] = choices[4][1];
 units[4] = "19";
 comments[4] = "Id Pregunta: 578. Estrategia TIC";


//  Id pregunta: 561 A�o de creaci�n de pregunta: 2016
 questions[5]= "6)  El plan nacional de ciudades inteligentes...";
 choices[5]= new Array();
 choices[5][0] = "Es una apuesta liderada por la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias";
 choices[5][1] = "Es una apuesta del ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[5][2] = "Es una apuesta liderada por una gran asociaci&oacute;n de empresas tecnol&oacute;gicas nacionales";
 choices[5][3] = "No existe";
 answers[5] = choices[5][1];
 units[5] = "19";
 comments[5] = "Id Pregunta: 561. Ciudades Inteligentes";


//  Id pregunta: 594 A�o de creaci�n de pregunta: 2016
 questions[6]= "7)  Son excepciones singulares en la utilizaci&oacute;n de los medios y servicios compartidos:";
 choices[6]= new Array();
 choices[6][0] = "Seguridad Social y AEAT";
 choices[6][1] = "IGAE (Servicios Inform&aacute;tica Presupuestaria)";
 choices[6][2] = "Medios y servicios espec&iacute;ficos que afecten a defensa, consulta pol&iacute;tica, situaciones de crisis y seguridad del Estado y los que manejen informaci&oacute;n clasificada";
 choices[6][3] = "Todos los anteriores";
 answers[6] = choices[6][3];
 units[6] = "19";
 comments[6] = "Id Pregunta: 594. Estrategia TIC";


//  Id pregunta: 558 A�o de creaci�n de pregunta: 2016
 questions[7]= "8)  &iquest;Cu&aacute;ndo ha sido aprobada la Agenda Digital para Espa&ntilde;a?";
 choices[7]= new Array();
 choices[7][0] = "En 2015";
 choices[7][1] = "En 2013";
 choices[7][2] = "En 2016";
 choices[7][3] = "En 2007";
 answers[7] = choices[7][1];
 units[7] = "19";
 comments[7] = "Id Pregunta: 558. Agenda Digital";


//  Id pregunta: 753 A�o de creaci�n de pregunta: 2016
 questions[8]= "9)  &iquest;Qui&eacute;n realiza el seguimiento peri&oacute;dico del cumplimiento de los objetivos de la Agenda Digital para Espa&ntilde;a?";
 choices[8]= new Array();
 choices[8][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital (SGAD)";
 choices[8][1] = "La Asociaci&oacute;n Espa&ntilde;ola de Normalizaci&oacute;n y Certificaci&oacute;n (AENOR)";
 choices[8][2] = "El Observatorio Nacional de Telecomunicaciones y Sociedad de la Informaci&oacute;n (ONTSI)";
 choices[8][3] = "El Observatorio de Administraci&oacute;n Electr&oacute;nica (OBSAE)";
 answers[8] = choices[8][2];
 units[8] = "19";
 comments[8] = "Id Pregunta: 753. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 165 A�o de creaci�n de pregunta: 2016
 questions[9]= "10)  Como parte del Plan de acci&oacute;n sobre administraci&oacute;n electr&oacute;nica para 2010-2020, la Comisi&oacute;n:";
 choices[9]= new Array();
 choices[9][0] = "Tratar&aacute; de interconectar los registros mercantiles en toda la UE.";
 choices[9][1] = "Se adoptar&aacute;n nuevas normas en materia de telecomunicaciones";
 choices[9][2] = "Se revisar&aacute; la Directiva de servicios de comunicaci&oacute;n audiovisual existente para adaptarse a la evoluci&oacute;n tecnol&oacute;gica";
 choices[9][3] = "Se actualizar&aacute;n las normas de comercio electr&oacute;nico";
 answers[9] = choices[9][0];
 units[9] = "19";
 comments[9] = "Id Pregunta: 165. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/";


//  Id pregunta: 585 A�o de creaci�n de pregunta: 2016
 questions[10]= "11)  &iquest;Qu&eacute; &oacute;rgano es el responsable de la implantaci&oacute;n de los medios y servicios compartidos?";
 choices[10]= new Array();
 choices[10][0] = "La CETIC";
 choices[10][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[10][2] = "La DTIC";
 choices[10][3] = "Ninguno de los anteriores";
 answers[10] = choices[10][1];
 units[10] = "19";
 comments[10] = "Id Pregunta: 585. Estrategia TIC";


//  Id pregunta: 581 A�o de creaci�n de pregunta: 2016
 questions[11]= "12)  &iquest;Qu&eacute; car&aacute;cter tiene la utilizaci&oacute;n de los medios y servicios compartidos?.";
 choices[11]= new Array();
 choices[11][0] = "Car&aacute;cter sustitutivo";
 choices[11][1] = "Car&aacute;cter obligatorio";
 choices[11][2] = "Car&aacute;cter obligatorio y sustitutivo, sin excepci&oacute;n alguna";
 choices[11][3] = "Ninguna de las anteriores";
 answers[11] = choices[11][3];
 units[11] = "19";
 comments[11] = "Id Pregunta: 581. Estrategia TIC. Car&aacute;cter obligatorio y sustitutivo, aunque se podr&aacute;n acordar excepciones";


//  Id pregunta: 592 A�o de creaci�n de pregunta: 2016
 questions[12]= "13)  Seg&uacute;n el Plan de Transformaci&oacute;n Digital de la AGE, &iquest;con qu&eacute; frecuencia de realizar&aacute;n nuevas declaraciones de servicios compartidos?";
 choices[12]= new Array();
 choices[12][0] = "Anualmente";
 choices[12][1] = "Bienalmente";
 choices[12][2] = "Cada cuatro a&ntilde;os";
 choices[12][3] = "No se define ninguna periodicidad";
 answers[12] = choices[12][1];
 units[12] = "19";
 comments[12] = "Id Pregunta: 592. Estrategia TIC. Se indica en la l&iacute;nea de acci&oacute;n 6";


//  Id pregunta: 162 A�o de creaci�n de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones";
 choices[13]= new Array();
 choices[13][0] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[13][1] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[13][2] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 00:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 choices[13][3] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 24 horas contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 answers[13] = choices[13][0];
 units[13] = "19";
 comments[13] = "Id Pregunta: 162. La respuesta B es la antigua redacci&oacute;n";


//  Id pregunta: 590 A�o de creaci�n de pregunta: 2016
 questions[14]= "15)  &iquest;Cu&aacute;les son objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[14]= new Array();
 choices[14][0] = "Incrementar la productividad y la eficacia del funcionamiento interno de la Administraci&oacute;n";
 choices[14][1] = "Convertir el canal digital en el preferente para la relaci&oacute;n de los ciudadanos y empresas con la Administraci&oacute;n";
 choices[14][2] = "Adoptar una estrategia corporativa de seguridad y usabilidad de los servicios p&uacute;blicos digitales";
 choices[14][3] = "Todos los anteriores";
 answers[14] = choices[14][3];
 units[14] = "19";
 comments[14] = "Id Pregunta: 590. Estrategia TIC";


//  Id pregunta: 756 A�o de creaci�n de pregunta: 2016
 questions[15]= "16)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares en que se basa la Agenda Digital Europea?";
 choices[15]= new Array();
 choices[15][0] = "Promover un acceso a internet r&aacute;pido y ultrarr&aacute;pido para todos";
 choices[15][1] = "Implantar el mercado general europeo";
 choices[15][2] = "Fomentar la alfabetizaci&oacute;n, la capacitaci&oacute;n y la inclusi&oacute;n digitales";
 choices[15][3] = "Consolidar la confianza y la seguridad en l&iacute;nea";
 answers[15] = choices[15][1];
 units[15] = "19";
 comments[15] = "Id Pregunta: 756. Agenda Digital Europea";


//  Id pregunta: 752 A�o de creaci�n de pregunta: 2016
 questions[16]= "17)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital para Espa&ntilde;a?";
 choices[16]= new Array();
 choices[16][0] = "Aumentar los beneficios empresariales mediante las TIC";
 choices[16][1] = "Promover la inclusi&oacute;n digital y la empleabilidad";
 choices[16][2] = "Fomentar el despliegue de redes y servicios";
 choices[16][3] = "Mejorar la administraci&oacute;n electr&oacute;nica";
 answers[16] = choices[16][0];
 units[16] = "19";
 comments[16] = "Id Pregunta: 752. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 167 A�o de creaci�n de pregunta: 2016
 questions[17]= "18)  Una de las preocupaciones de la Agenda Digital Europea es la &ldquo;exclusi&oacute;n digital&rdquo;. Para combatirla, se incluyen medidas como...";
 choices[17]= new Array();
 choices[17][0] = "incrementar la eficiencia energ&eacute;tica y reducir la energ&iacute;a que se usa en los hogares";
 choices[17][1] = "incrementar el ratio de participaci&oacute;n de personas con discapacidad en actividades p&uacute;blicas, sociales y econ&oacute;micas a trav&eacute;s de proyectos de inclusi&oacute;n.";
 choices[17][2] = "implementar un sistema de firma electr&oacute;nica seguro que funcione en cualquiera de los Estados Miembros";
 choices[17][3] = "apoyar las pol&iacute;ticas del sector audiovisual en pos de las personas con discapacidad";
 answers[17] = choices[17][1];
 units[17] = "19";
 comments[17] = "Id Pregunta: 167. https://ec.europa.eu/digital-single-market/en/digital-inclusion-better-eu-society";


//  Id pregunta: 579 A�o de creaci�n de pregunta: 2016
 questions[18]= "19)  &iquest;Cu&aacute;les son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[18]= new Array();
 choices[18][0] = "Transparencia e innovaci&oacute;n, orientaci&oacute;n al usuario del servicio y fomentar el uso de est&aacute;ndares";
 choices[18][1] = "Colaboraci&oacute;n y alianzas, unidad y visi&oacute;n integral y orientaci&oacute;n al usuario del servicio";
 choices[18][2] = "Unidad y visi&oacute;n integral, orientaci&oacute;n al usuario del servicio y prestaci&oacute;n de servicios compartidos";
 choices[18][3] = "Colaboraci&oacute;n y alianzas, fomentar el uso de est&aacute;ndares e incrementar la productividad y la eficacia";
 answers[18] = choices[18][1];
 units[18] = "19";
 comments[18] = "Id Pregunta: 579. Estrategia TIC";


//  Id pregunta: 586 A�o de creaci�n de pregunta: 2016
 questions[19]= "20)  &iquest;Cu&aacute;l es el per&iacute;odo temporal del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[19]= new Array();
 choices[19][0] = "Comprende del a&ntilde;o 2015 al 2017";
 choices[19][1] = "Comprende del a&ntilde;o 2015 al 2020";
 choices[19][2] = "Comprende del a&ntilde;o 2016 al 2018";
 choices[19][3] = "Ninguna de las anteriores";
 answers[19] = choices[19][1];
 units[19] = "19";
 comments[19] = "Id Pregunta: 586. Estrategia TIC";


//  Id pregunta: 589 A�o de creaci�n de pregunta: 2016
 questions[20]= "21)  Son servicios declarados compartidos:";
 choices[20]= new Array();
 choices[20][0] = "Servicio unificado de telecomunicaciones y servicio de seguridad gestionada";
 choices[20][1] = "Servicio multicanal de atenci&oacute;n al ciudadano";
 choices[20][2] = "Servicio com&uacute;n de generaci&oacute;n y validaci&oacute;n de firmas electr&oacute;nicas";
 choices[20][3] = "Todos los anteriores";
 answers[20] = choices[20][3];
 units[20] = "19";
 comments[20] = "Id Pregunta: 589. Estrategia TIC";


//  Id pregunta: 557 A�o de creaci�n de pregunta: 2016
 questions[21]= "22)  &iquest;Qu&eacute; ministerios han liderado la elaboraci&oacute;n de la Agenda Digital para Espa&ntilde;a?";
 choices[21]= new Array();
 choices[21][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica ";
 choices[21][1] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[21][2] = "El Ministerio de Econom&iacute;a, Industria y Competitividad y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[21][3] = "Ninguno de ellos, puesto que ha venido elaborada desde los organismos de la UE";
 answers[21] = choices[21][0];
 units[21] = "19";
 comments[21] = "Id Pregunta: 557. Agenda Digital";


//  Id pregunta: 755 A�o de creaci�n de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes no es uno de los planes y actuaciones recogidos en la Agenda Digital para Espa&ntilde;a?";
 choices[22]= new Array();
 choices[22][0] = "Plan Nacional de Ciudades Inteligentes";
 choices[22][1] = "Plan Digital de Protecci&oacute;n del Medioambiente";
 choices[22][2] = "Plan de Impulso de las Tecnolog&iacute;as del Lenguaje";
 choices[22][3] = "Desarrollo e innovaci&oacute;n del sector TIC";
 answers[22] = choices[22][1];
 units[22] = "19";
 comments[22] = "Id Pregunta: 755. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 588 A�o de creaci�n de pregunta: 2016
 questions[23]= "24)  &iquest;Cu&aacute;ntos servicios se declararon compartidos en la primera declaraci&oacute;n?";
 choices[23]= new Array();
 choices[23][0] = "14";
 choices[23][1] = "11";
 choices[23][2] = "12";
 choices[23][3] = "15";
 answers[23] = choices[23][0];
 units[23] = "19";
 comments[23] = "Id Pregunta: 588. Estrategia TIC";


//  Id pregunta: 591 A�o de creaci�n de pregunta: 2016
 questions[24]= "25)  &iquest;Qui&eacute;n se encarga de revisar la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[24]= new Array();
 choices[24][0] = "La CETIC";
 choices[24][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[24][2] = "La DTIC";
 choices[24][3] = "El MHFP";
 answers[24] = choices[24][0];
 units[24] = "19";
 comments[24] = "Id Pregunta: 591. Estrategia TIC";


//  Id pregunta: 580 A�o de creaci�n de pregunta: 2016
 questions[25]= "26)  &iquest;A qui&eacute;n corresponde la declaraci&oacute;n de medios y servicios compartidos?";
 choices[25]= new Array();
 choices[25][0] = "A la CETIC";
 choices[25][1] = "A la Secretar&iacute;a General de Administraci&oacute;n Digital, a propuesta de la CETIC";
 choices[25][2] = "A la CETIC y a la Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[25][3] = "A la CETIC, a propuesta de la Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[25] = choices[25][3];
 units[25] = "19";
 comments[25] = "Id Pregunta: 580. Estrategia TIC";


//  Id pregunta: 587 A�o de creaci�n de pregunta: 2016
 questions[26]= "27)  &iquest;Qui&eacute;n y cu&aacute;ndo presenta el informe de seguimiento sobre el grado de avance de la implementaci&oacute;n de la Estrategia TIC?";
 choices[26]= new Array();
 choices[26][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, anualmente";
 choices[26][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, bienalmente";
 choices[26][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, bienalmente";
 choices[26][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, sin periodicidad definida";
 answers[26] = choices[26][0];
 units[26] = "19";
 comments[26] = "Id Pregunta: 587. Estrategia TIC";


//  Id pregunta: 757 A�o de creaci�n de pregunta: 2016
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes no es una prioridad propuesta por la Estrategia Europa 2020?";
 choices[27]= new Array();
 choices[27][0] = "Crecimiento sostenible";
 choices[27][1] = "Crecimiento inteligente";
 choices[27][2] = "Crecimiento digital";
 choices[27][3] = "Crecimiento integrador";
 answers[27] = choices[27][2];
 units[27] = "19";
 comments[27] = "Id Pregunta: 757. Europa 2020";


//  Id pregunta: 584 A�o de creaci�n de pregunta: 2016
 questions[28]= "29)  &iquest;Con qu&eacute; frecuencia se revisa la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE, para su alineamiento con las pol&iacute;ticas p&uacute;blicas del gobierno?";
 choices[28]= new Array();
 choices[28][0] = "Bienalmente";
 choices[28][1] = "Anualmente";
 choices[28][2] = "Semestralmente";
 choices[28][3] = "Cada cuatro a&ntilde;os";
 answers[28] = choices[28][1];
 units[28] = "19";
 comments[28] = "Id Pregunta: 584. Estrategia TIC";


//  Id pregunta: 166 A�o de creaci�n de pregunta: 2016
 questions[29]= "30)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[29]= new Array();
 choices[29][0] = "Interoperabilidad";
 choices[29][1] = "Integridad";
 choices[29][2] = "Capital humano";
 choices[29][3] = "Trazabilidad";
 answers[29] = choices[29][2];
 units[29] = "19";
 comments[29] = "Id Pregunta: 166. https://ec.europa.eu/digital-single-market/en/desi Conectividad, Capital humano, Uso de internet, Integraci&oacute;n de tecnolog&iacute;a digital, Servicios p&uacute;blicos digitales";


//  Id pregunta: 582 A�o de creaci�n de pregunta: 2016
 questions[30]= "31)  &iquest;Cu&aacute;ndo tuvo lugar la primera declaraci&oacute;n de servicios compartidos?";
 choices[30]= new Array();
 choices[30][0] = "El 5 de Octubre de 2015";
 choices[30][1] = "El 15 de Octubre de 2015";
 choices[30][2] = "El 15 de Septiembre de 2015";
 choices[30][3] = "El 2 de Octubre de 2015";
 answers[30] = choices[30][2];
 units[30] = "19";
 comments[30] = "Id Pregunta: 582. Estrategia TIC";


//  Id pregunta: 164 A�o de creaci�n de pregunta: 2016
 questions[31]= "32)  En el contexto del Mercado &Uacute;nico Digital, &iquest;qu&eacute; significa la eliminaci&oacute;n del geobloqueo?";
 choices[31]= new Array();
 choices[31][0] = "Introducir medidas destinadas a mejorar la transparencia en materia de precios y la vigilancia regulatoria del mercado transfronterizo de paqueter&iacute;a";
 choices[31][1] = "Eliminar la denegaci&oacute;n de acceso a sitios internet basados en otro pa&iacute;s de la UE o que se cobren precios distintos en funci&oacute;n de la localizaci&oacute;n de un cliente";
 choices[31][2] = "Promover medidas para permitir a los vendedores de bienes f&iacute;sicos beneficiarse del registro y pago electr&oacute;nicos &uacute;nicos y de la introducci&oacute;n de un umbral com&uacute;n del IVA que ayude a las nuevas empresas innovadoras a trabajar en l&iacute;nea";
 choices[31][3] = "Presentar una iniciativa europea sobre computaci&oacute;n en nube, incluidos los servicios de certificaci&oacute;n de la nube";
 answers[31] = choices[31][1];
 units[31] = "19";
 comments[31] = "Id Pregunta: 164. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/ A: &quot;mejora de la paqueter&iacute;a transfronteriza&quot;; C: &quot;Reducci&oacute;n de la burocracia relacionada con el IVA&quot;; D: &quot;Construir una econom&iacute;a de los datos&quot;";


//  Id pregunta: 163 A�o de creaci�n de pregunta: 2016
 questions[32]= "33)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, constituye una infracci&oacute;n grave:";
 choices[32]= new Array();
 choices[32][0] = "No conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3";
 choices[32][1] = "No conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[32][2] = "El incumplimiento de la llevanza del libro-registro";
 choices[32][3] = "La conservaci&oacute;n de los datos por un per&iacute;odo superior al establecido en el art&iacute;culo 5.";
 answers[32] = choices[32][0];
 units[32] = "19";
 comments[32] = "Id Pregunta: 163. B y C: son &quot;Muy grave&quot;; D: para que fuera verdadera deber&iacute;a ser &quot;inferior&quot;";


//  Id pregunta: 754 A�o de creaci�n de pregunta: 2016
 questions[33]= "34)  &iquest;Cu&aacute;l de los siguientes no es un eje del Plan de Servicios P&uacute;blicos Digitales que forma parte de la Agenda Digital para Espa&ntilde;a?";
 choices[33]= new Array();
 choices[33][0] = "Programa de Educaci&oacute;n Digital";
 choices[33][1] = "Programa de Salud y Bienestar Social";
 choices[33][2] = "Programa de Administraci&oacute;n de Justicia Digital";
 choices[33][3] = "Programa de capacitaci&oacute;n de profesionales TIC";
 answers[33] = choices[33][3];
 units[33] = "19";
 comments[33] = "Id Pregunta: 754. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 559 A�o de creaci�n de pregunta: 2016
 questions[34]= "35)  Uno de los objetivos de la Agenda Digital para Espa&ntilde;a es desarrollar la econom&iacute;a digital, &iquest;qu&eacute; actuaciones se deben desarrollar para lograr esto?";
 choices[34]= new Array();
 choices[34][0] = "Impulsar la producci&oacute;n y distribuci&oacute;n a trav&eacute;s de Internet de contenidos digitales";
 choices[34][1] = "Favorecer la internacionalizaci&oacute;n de las empresas tecnol&oacute;gicas";
 choices[34][2] = "Incentivar el uso transformador de las TIC en nuestras empresas";
 choices[34][3] = "Todos los anteriores";
 answers[34] = choices[34][3];
 units[34] = "19";
 comments[34] = "Id Pregunta: 559. Agenda Digital";


//  Id pregunta: 170 A�o de creaci�n de pregunta: 2016
 questions[35]= "36)  En el contexto del mercado &uacute;nico digital, &iquest;qu&eacute; medidas se han tomado para el impulso de la confianza en el tratamiento de los datos personales en el contexto de los servicios digitales en el a&ntilde;o 2016?";
 choices[35]= new Array();
 choices[35][0] = "Se ha establecido una colaboraci&oacute;n p&uacute;blico-privada en materia de ciberseguridad.";
 choices[35][1] = "Se han introducido medidas para impulsar las destrezas digitales de la poblaci&oacute;n, que la Comisi&oacute;n incorporar&aacute; en futuras iniciativas sobre destrezas y formaci&oacute;n.";
 choices[35][2] = "Se ha aprobado el Reglamento (UE) 2016/769 relativo a la protecci&oacute;n de las personas f&iacute;sicas en lo que respecta al tratamiento de datos personales y a la libre circulaci&oacute;n de estos datos y por el que se deroga la Directiva 95/46/CE";
 choices[35][3] = "Se han introducido medidas para garantizar la libertad de los medios de comunicaci&oacute;n y la promoci&oacute;n de la diversidad cultural";
 answers[35] = choices[35][2];
 units[35] = "19";
 comments[35] = "Id Pregunta: 170. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Mayo/Noticia-2016-05-09-Nuevo-Reglamento-LOPD.html#.WCnlfmrhDIU";


//  Id pregunta: 758 A�o de creaci�n de pregunta: 2016
 questions[36]= "37)  &iquest;Cu&aacute;l de las siguientes no es una iniciativa propuesta por la Estrategia Europa 2020?";
 choices[36]= new Array();
 choices[36][0] = "Agenda digital para Europa";
 choices[36][1] = "Agenda de nuevas cualificaciones y empleos";
 choices[36][2] = "Juventud en movimiento";
 choices[36][3] = "Agenda Web 2.0";
 answers[36] = choices[36][3];
 units[36] = "19";
 comments[36] = "Id Pregunta: 758. Europa 2020";


//  Id pregunta: 171 A�o de creaci�n de pregunta: 2016
 questions[37]= "38)  Se&ntilde;ale la respuesta FALSA. Entre los objetivos de ISA2 se encuentra:";
 choices[37]= new Array();
 choices[37][0] = "desarrollar, mantener y promover un enfoque hol&iacute;stico hacia la interoperabilidad en la Uni&oacute;n para eliminar la fragmentaci&oacute;n en el panorama de la interoperabilidad en la Uni&oacute;n";
 choices[37][1] = "facilitar la reutilizaci&oacute;n de las soluciones de interoperabilidad por parte de las administraciones p&uacute;blicas europeas.";
 choices[37][2] = "identificar, crear y explotar soluciones de interoperabilidad que faciliten la ejecuci&oacute;n de las pol&iacute;ticas y actividades de la Uni&oacute;n";
 choices[37][3] = "eliminar la interacci&oacute;n electr&oacute;nica transfronteriza tanto entre las administraciones p&uacute;blicas europeas fomentando una cultura de ciberseguridad europea";
 answers[37] = choices[37][3];
 units[37] = "19";
 comments[37] = "Id Pregunta: 171. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Diciembre/Noticia-2015-12-09-Publicada-la-Decision-ISA2-continuidad-al-esfuerzo-asegurar-interoperabilidad-entre-AAPP-europeas.html#.WCnm1WrhDIU";


//  Id pregunta: 560 A�o de creaci�n de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;l de los siguientes no es un obst&aacute;culo identificado por la Comisi&oacute;n para el desarrollo de la Agenda Digital europea?";
 choices[38]= new Array();
 choices[38][0] = "El incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes";
 choices[38][1] = "La falta de inversi&oacute;n en campa&ntilde;as de comunicaci&oacute;n en los pa&iacute;ses miembros";
 choices[38][2] = "Las carencias en la alfabetizaci&oacute;n y la capacitaci&oacute;n digitales";
 choices[38][3] = "La ausencia de inversi&oacute;n en las redes";
 answers[38] = choices[38][1];
 units[38] = "19";
 comments[38] = "Id Pregunta: 560. Agenda Digital";


//  Id pregunta: 595 A�o de creaci�n de pregunta: 2016
 questions[39]= "40)  &iquest;Qui&eacute;n elabora y ejecuta los Planes de Acci&oacute;n Sectoriales?";
 choices[39]= new Array();
 choices[39][0] = "La CETIC";
 choices[39][1] = "Los Ministerios";
 choices[39][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[39][3] = "Ninguno de los anteriores";
 answers[39] = choices[39][1];
 units[39] = "19";
 comments[39] = "Id Pregunta: 595. Estrategia TIC";


//  Id pregunta: 593 A�o de creaci�n de pregunta: 2016
 questions[40]= "41)  A nivel departamental, &iquest;qui&eacute;n es el responsable de la coordinaci&oacute;n interna para llevar a cabo la transformaci&oacute;n digital?";
 choices[40]= new Array();
 choices[40][0] = "Las CMADs (Comisi&oacute;n Ministerial de Administraci&oacute;n Digital)";
 choices[40][1] = "La CETIC";
 choices[40][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[40][3] = "El MHFP";
 answers[40] = choices[40][0];
 units[40] = "19";
 comments[40] = "Id Pregunta: 593. Estrategia TIC";


//  Id pregunta: 160 A�o de creaci�n de pregunta: 2016
 questions[41]= "42)  El mercado &uacute;nico digital se basa en tres pilares. Se&ntilde;ale cu&aacute;l NO es uno de los tres pilares.";
 choices[41]= new Array();
 choices[41][0] = "Mejorar el acceso de consumidores y empresas a los bienes y servicios digitales en toda Europa.";
 choices[41][1] = "Promover la actualizaci&oacute;n de las normas de accesibilidad hacia WCAG 3.0 por una sociedad m&aacute;s incluyente.";
 choices[41][2] = "Creaci&oacute;n de las condiciones adecuadas y la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan florecer";
 choices[41][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[41] = choices[41][1];
 units[41] = "19";
 comments[41] = "Id Pregunta: 160. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Mayo/Noticia-2015-05-07-estrategia-mercado-unico-digital-europeo.html#.WCjr0mrhDIU";


//  Id pregunta: 16 A�o de creaci�n de pregunta: 2016
 questions[42]= "43)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos de comunicaciones electr&oacute;nicas y de redes p&uacute;blicas de comunicaci&oacute;n:";
 choices[42]= new Array();
 choices[42][0] = "Deben conservarse los datos que revelen el contenido de la comunicaci&oacute;n en virtud de lo establecido en la citada Ley.";
 choices[42][1] = "La obligaci&oacute;n de conservaci&oacute;n de datos cesa a los tres a&ntilde;os desde la fecha en que se haya producido la comunicaci&oacute;n.";
 choices[42][2] = "Los datos conservados de conformidad con lo dispuesto en la citada Ley pueden ser cedidos para los fines que en la misma se determinan previa autorizaci&oacute;n administrativa.";
 choices[42][3] = "Son sujetos obligados los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones.";
 answers[42] = choices[42][3];
 units[42] = "19";
 comments[42] = "Id Pregunta: 16. AGE A1 2015";


//  Id pregunta: 169 A�o de creaci�n de pregunta: 2016
 questions[43]= "44)  En lo que se refiere a comunicaciones m&oacute;viles en Europa,";
 choices[43]= new Array();
 choices[43][0] = "en 2020 se liberar&aacute;n las bandas de frecuencia superior a 10 Ghz para el despliegue de 5G";
 choices[43][1] = "en 2020 se espera desplegar la red 5G a gran escala.";
 choices[43][2] = "en 2020 se espera desplegar la red 4G-plus.";
 choices[43][3] = "en 2020 se liberar&aacute; la banda de frecuencia de 800 Mhz para finalizar el despliegue de 4G";
 answers[43] = choices[43][1];
 units[43] = "19";
 comments[43] = "Id Pregunta: 169. https://ec.europa.eu/digital-single-market/en/5g-europe-action-plan";


//  Id pregunta: 583 A�o de creaci�n de pregunta: 2016
 questions[44]= "45)  &iquest;Qu&eacute; establece Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[44]= new Array();
 choices[44][0] = "Los principios rectores";
 choices[44][1] = "Los objetivos estrat&eacute;gicos y las acciones para alcanzarlos";
 choices[44][2] = "Los hitos para su desarrollo gradual";
 choices[44][3] = "Todos los anteriores";
 answers[44] = choices[44][3];
 units[44] = "19";
 comments[44] = "Id Pregunta: 583. Estrategia TIC";


