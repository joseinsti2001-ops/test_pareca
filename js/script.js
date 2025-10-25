// script.js
const preguntas = [
    {
        descripcion: "Evacuador de gases al principio del cañón. Tren Christie.",
        respuesta: "T-55",
        opciones: ["T-62", "T-55", "T-72B", "M1 Abrams"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/T-55_Tank_Military_Parade_2013_%282%29.jpg/640px-T-55_Tank_Military_Parade_2013_%282%29.jpg"
    },
    {
        descripcion: "Evacuador de gases a mitad del cañón. Torre redondea. Tren Christie.",
        respuesta: "T-62",
        opciones: ["T-55", "T-62", "T-80U", "Leopard 1"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/T-62_Tank_%281%29.jpg/640px-T-62_Tank_%281%29.jpg"
    },
    {
        descripcion: "Recubierto de cubitos. Faro al lado contrario. Cara torre con forma de esquina. Ruedas de tapacubos.",
        respuesta: "T-64BV",
        opciones: ["T-72B", "T-64BV", "T-80U", "T-90A"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/T-64BV_Tank.jpg/640px-T-64BV_Tank.jpg"
    },
    {
        descripcion: "Ruedas lisas. Tres periscopios. Snorkel. A veces lleva faldón. Kontact 5 forma de paraguas.",
        respuesta: "T-80U/UD",
        opciones: ["T-72B3", "T-80U/UD", "T-80BVM", "T-90M"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/T-80UD_Tank.jpg/640px-T-80UD_Tank.jpg"
    },
    {
        descripcion: "Tres periscopios. Blindaje torre en forma de platillo volante. A veces lleva faldón. Ruedas lisas.",
        respuesta: "T-80BVM",
        opciones: ["T-80U/UD", "T-72B3", "T-80BVM", "T-90A"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/T-80BVM_Tank.jpg/640px-T-80BVM_Tank.jpg"
    },
    {
        descripcion: "Faldones ligeros. Ruedas margarita. Una harta de lanza fumígenos.",
        respuesta: "T-72B3",
        opciones: ["T-72B", "T-64BV", "T-72B3", "PT-91"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/T-72B3_Tank.jpg/640px-T-72B3_Tank.jpg"
    },
    {
        descripcion: "Lanza-fumígenos 2+4. Ruedas margarita. 3 placas de blindaje.",
        respuesta: "PT-91",
        opciones: ["T-72B3", "PT-91", "T-90A", "Leopard 2"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/PT-91_Tank.jpg/640px-PT-91_Tank.jpg"
    },
    {
        descripcion: "Ojos del T-90. Blindaje de torre puesto matizado. Escape lado izquierdo.",
        respuesta: "T-90A",
        opciones: ["T-90M", "T-90A", "T-80U", "T-14 Armata"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/T-90A_Tank.jpg/640px-T-90A_Tank.jpg"
    },
    {
        descripcion: "ERA Relikt muy plana. 'Rejilla' (puede o no llevarla). Lanza fumígenos. Faldones muy tochos. Torre recta (sin platillo volante).",
        respuesta: "T-90M",
        opciones: ["T-90A", "T-90M", "T-80BVM", "T-14 Armata"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/T-90M_Proryv.jpg/640px-T-90M_Proryv.jpg"
    },
    {
        descripcion: "'Pómulos'. Glacis superior muy plano. Preinstalación del peri. Lanza-fumígenos.",
        respuesta: "M-60",
        opciones: ["M1 Abrams", "M-60", "Challenger 2", "Leopard 2"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/M-60_Patton_tank.jpg/640px-M-60_Patton_tank.jpg"
    },
    {
        descripcion: "Peri frente al cargador. Lanzas en forma de colmena. 'Pómulos'. Conductor en el centro.",
        respuesta: "M1A1 ABRAMS",
        opciones: ["M1A2 ABRAMS", "M1A1 ABRAMS", "M1 Abrams", "Leopard 2A4"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/M1A1_Abrams_Tank_%28cropped%29.jpg/640px-M1A1_Abrams_Tank_%28cropped%29.jpg"
    },
    {
        descripcion: "Cesta que rodea la torre. Peri frente al cargador. Faldones ligeros.",
        respuesta: "M1A2 ABRAMS",
        opciones: ["M1A1 ABRAMS", "M1A2 ABRAMS", "M1A2 SEP V3", "M1 Abrams"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/M1A2_Abrams.jpg/640px-M1A2_Abrams.jpg"
    },
    {
        descripcion: "Arma remota. Elementos de puntería. Peri con forma de cubo de basura.",
        respuesta: "M1A2 SEP V3",
        opciones: ["M1A2 ABRAMS", "M1A1 ABRAMS", "M1A2 SEP V3", "M1 Abrams"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/M1A2_SEP_V3.jpg/640px-M1A2_SEP_V3.jpg"
    },
    {
        descripcion: "Caja con lo de apuntar. Extintores. Peri del jefe.",
        respuesta: "AMX-56 Leclerc",
        opciones: ["AMX-30", "Leopard 2", "AMX-56 Leclerc", "Challenger 2"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/AMX-56_Leclerc.jpg/640px-AMX-56_Leclerc.jpg"
    },
    {
        descripcion: "Lanza fumígenos en ramo. 'Radiador'. MG 3.",
        respuesta: "Challenger 2",
        opciones: ["Challenger 1", "Challenger 2", "Chieftain", "FV 510 Warrior"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Challenger_2_tank.jpg/640px-Challenger_2_tank.jpg"
    },
    {
        descripcion: "Torre inclinada. Escape a ambos lados. Mantelete muy anguloso. Faros redondos alemanes.",
        respuesta: "C1 Ariete",
        opciones: ["Leopard 1", "C1 Ariete", "Leopard 2", "M60 Patton"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/C1_Ariete.jpg/640px-C1_Ariete.jpg"
    },
    {
        descripcion: "Elementos de puntería. Periscopio del jefe. Torre plana.",
        respuesta: "Leopard 1",
        opciones: ["Leopard 2A4", "Leopard 1", "M60 Patton", "M48 Patton"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Leopard_1A5.jpg/640px-Leopard_1A5.jpg"
    },
    {
        descripcion: "Torre forma de cuña. Elementos de puntería. Cañón más largo. Faros redondos.",
        respuesta: "Leopard 2A4",
        opciones: ["Leopard 2A5", "Leopard 1", "Leopard 2A4", "Leopard 2A6"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Leopard_2A4.jpg/640px-Leopard_2A4.jpg"
    },
    {
        descripcion: "Peri atrasado. Barcaza reforzada. Cámara conductor. Faros cuadrados.",
        respuesta: "Leopard 2A6",
        opciones: ["Leopard 2A4", "Leopard 2A5", "Leopard 2A6", "Leopard 2A7"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Leopard_2A6.jpg/640px-Leopard_2A6.jpg"
    },
    {
        descripcion: "Cañón 73mm corto. 5 ruedas tren rodaje. Barcaza con forma de barco. Torre adelantada.",
        respuesta: "BMD-1",
        opciones: ["BMD-2", "BMP-1", "BMD-1", "BRDM-2"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/BMD-1_001.jpg/640px-BMD-1_001.jpg"
    },
    {
        descripcion: "Cañón fino y alargado de 30mm ATGM. 5 ruedas tren rodaje. Barcaza con forma de barco.",
        respuesta: "BMD-2",
        opciones: ["BMD-1", "BMD-2", "BMP-2", "BTR-82A"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/BMD-2_001.jpg/640px-BMD-2_001.jpg"
    },
    {
        descripcion: "Cañones de 100mm y 30mm. 5 ruedas de rodaje. 3+3 lanza-artificios.",
        respuesta: "BMD-4",
        opciones: ["BMD-3", "BMP-3", "BMD-4", "BTR-4"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/BMD-4.jpg/640px-BMD-4.jpg"
    },
    {
        descripcion: "Faldón ligero circular. 2 escotillas. Cañón 73mm corto. 6 ruedas tren rodaje.",
        respuesta: "BMP-1",
        opciones: ["BMP-2", "BMP-3", "BMD-1", "BMP-1"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/BMP-1_001.jpg/640px-BMP-1_001.jpg"
    },
    {
        descripcion: "Faldón ligero circular. Cañón 30mm. 6 ruedas tren rodaje.",
        respuesta: "BMP-2",
        opciones: ["BMP-1", "BMP-3", "BMD-2", "BMP-2"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/BMP-2_001.jpg/640px-BMP-2_001.jpg"
    },
    {
        descripcion: "Doble cañón. 3+3 lanza fumígenos. Faros muy juntos. 6 Ruedas lisas dobles.",
        respuesta: "BMP-3",
        opciones: ["BMP-2", "BMD-4", "BTR-3", "BMP-3"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/BMP-3_001.jpg/640px-BMP-3_001.jpg"
    },
    {
        descripcion: "Cañón 30mm con forma de 'porra'.",
        respuesta: "BMP-T",
        opciones: ["BMP-3", "BTR-82A", "BMP-T", "BRDM-2"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/BMP-T.jpg/640px-BMP-T.jpg"
    },
    {
        descripcion: "Rampa de vadeo. Pequeña torre. 4 ruedas.",
        respuesta: "BRDM-2",
        opciones: ["BRDM-1", "BTR-80", "BRDM-2", "BTR-70"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/BRDM-2_001.jpg/640px-BRD-2_001.jpg"
    },
    {
        descripcion: "Escalón donde el conductor. Lanzador TOW.",
        respuesta: "M2/M3 Bradley",
        opciones: ["M1126 Stryker", "FV 510 Warrior", "M2/M3 Bradley", "CV-90"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/M2_Bradley_IFV.jpg/640px-M2_Bradley_IFV.jpg"
    },
    {
        descripcion: "Faros que sobresalen. Cesta muy característica. Separación 3era y 4ta rueda. 8 Ruedas. Ametralladora 12,7mm con lanza fumígenos.",
        respuesta: "M1126 Stryker",
        opciones: ["M2/M3 Bradley", "LAV 25", "M1126 Stryker", "Ajax"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Stryker_M1126.jpg/640px-Stryker_M1126.jpg"
    },
    {
        descripcion: "Torre 'Cara de rana'. Tren de rodaje Christie. Plano y alargado.",
        respuesta: "MTLB",
        opciones: ["GAZ Tiger", "KAMAZ Typhoon", "MTLB", "BTR-80"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/MTLB_001.jpg/640px-MTLB_001.jpg"
    },
    {
        descripcion: "12,7mm en el techo. Puerta acceso GMP. Depósito combustible. Tren christie. Forma de caja.",
        respuesta: "M-113",
        opciones: ["AAV-7A1", "M-113", "LAV III", "GTK Boxer"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/M113_001.jpg/640px-M113_001.jpg"
    },
    {
        descripcion: "Parrilla característica similar a un jeep.",
        respuesta: "HMMWV",
        opciones: ["IVECO LMV", "HMMWV", "Renault Sherpa 2", "Panhard VPS"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/HMMWV_001.jpg/640px-HMMWV_001.jpg"
    },
    {
        descripcion: "Puerta pequeña sobre la rueda. Puesto con máquina. 2 ejes.",
        respuesta: "VAB",
        opciones: ["VBL", "VAB", "Fuchs", "GTK Boxer"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/VAB_001.jpg/640px-VAB_001.jpg"
    },
    {
        descripcion: "Separación entre conductor y copiloto. Falta de parrilla. Radiador lateral.",
        respuesta: "VBL",
        opciones: ["VAB", "FV 432 Bulldog", "VBL", "Panhard VPS"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/VBL_001.jpg/640px-VBL_001.jpg"
    },
    {
        descripcion: "Cantidad tremenda de ERA. Afuste con escudo.",
        respuesta: "GTK Boxer",
        opciones: ["Fuchs", "Namer", "GTK Boxer", "Patria AMV"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Boxer_001.jpg/640px-Boxer_001.jpg"
    },
    {
        descripcion: "Chasis T-80 con motor T-72. Torre mas central que otras ATPs. Frenos de recuperación. Torre muy grande.",
        respuesta: "2S19 MSTA",
        opciones: ["2S35 Koalitsaya", "2S1 Gvozdika", "2S19 MSTA", "M109"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/2S19_Msta-S_001.jpg/640px-2S19_Msta-S_001.jpg"
    },
    {
        descripcion: "Frenos de recuperación escondidos. Tren de rodaje del T-90.",
        respuesta: "2S35 Koalitsaya",
        opciones: ["2S19 MSTA", "2S3 Akatsiya", "2S35 Koalitsaya", "Palmaria 155mm"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/2S35_Koalitsiya-SV_001.jpg/640px-2S35_Koalitsiya-SV_001.jpg"
    },
    {
        descripcion: "Torre mas chafada. Chasis forma de barco. Tren de rodaje christie.",
        respuesta: "2S1 Gvozdika",
        opciones: ["2S3 Akatsiya", "2S1 Gvozdika", "FH 70", "M109"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/2S1_Gvozdika_001.jpg/640px-2S1_Gvozdika_001.jpg"
    },
    {
        descripcion: "Tren vickers. 2 recuperadores de retroceso. Torre mas voluminosa.",
        respuesta: "2S3 Akatsiya",
        opciones: ["2S1 Gvozdika", "M109", "2S3 Akatsiya", "AS-90 Braveheart"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/2S3_Akatsiya_001.jpg/640px-2S3_Akatsiya_001.jpg"
    },
    {
        descripcion: "Cañón enorme. Tripulación descubierta. Chasis T-80. Barcaza sobresale por delante.",
        respuesta: "27M Malka",
        opciones: ["2S35 Koalitsaya", "2S1 Gvozdika", "27M Malka", "M109"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/27M_Malka_001.jpg/640px-27M_Malka_001.jpg"
    },
    {
        descripcion: "2 cañones 30mm. Radar de adquisición. Radar de seguimiento. 4 misiles por lado.",
        respuesta: "Tunguska",
        opciones: ["Patriot", "Hawk", "Tunguska", "S-400"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/SA-19_Tunguska_001.jpg/640px-SA-19_Tunguska_001.jpg"
    },
    {
        descripcion: "Faros en frente del chasis. Freno de boca sencillo. Peri del jefe. Frente de torre circular.",
        respuesta: "M109",
        opciones: ["2S1 Gvozdika", "FH 70", "M109", "M777"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/M109A6_Paladin_001.jpg/640px-M109A6_Paladin_001.jpg"
    },
    {
        descripcion: "Sistema de carga. Cofres de almacenaje. Cureña. Trinca.",
        respuesta: "Caesar",
        opciones: ["FH 70", "Panzeraubitz 2000", "Caesar", "M109"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Caesar_001.jpg/640px-Caesar_001.jpg"
    },
    {
        descripcion: "Luces sobre el glacis. Base del cañón 'solid'. Peri.",
        respuesta: "Panzeraubitz 2000",
        opciones: ["M109", "Caesar", "Panzeraubitz 2000", "M777"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/PzH2000_001.jpg/640px-PzH2000_001.jpg"
    },
    {
        descripcion: "Mazacote grande detrás del cañón. Espacio 'vacío'. 3 ejes.",
        respuesta: "Archer FH77BW L52",
        opciones: ["M777", "Panzeraubitz 2000", "Archer FH77BW L52", "M109"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Archer_001.jpg/640px-Archer_001.jpg"
    },
    {
        descripcion: "2 ejes bajo la pieza. Tubo muy largo.",
        respuesta: "M777",
        opciones: ["M109", "M777", "FH 70", "M114 105"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/M777_001.jpg/640px-M777_001.jpg"
    },
    {
        descripcion: "Lanzacohetes con misiles en configuración de 6. Cabina blindada hexagonal. Chasis 2+1. 'Asa' encima de cohetes.",
        respuesta: "HIMARS",
        opciones: ["M270 MLRS", "BM-21 Grad", "HIMARS", "BM-30 Smerch"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/HIMARS_001.jpg/640px-HIMARS_001.jpg"
    },
    {
        descripcion: "Tubos muy muy largos. Cuatro ruedas distribuidas de forma uniforme. Cabina del conductor solo en un lado.",
        respuesta: "BM-30 Smerch",
        opciones: ["BM-21 Grad", "TOS-1", "BM-30 Smerch", "HIMARS"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/BM-30_Smerch_001.jpg/640px-BM-30_Smerch_001.jpg"
    },
    {
        descripcion: "Cohetes metidos en 'caja'. Camión con morro. Lanzacohetes sobre eje trasero.",
        respuesta: "BM-21 Grad",
        opciones: ["BM-30 Smerch", "M270 MLRS", "BM-21 Grad", "TOS-1"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/BM-21_Grad_001.jpg/640px-BM-21_Grad_001.jpg"
    },
    {
        descripcion: "Lanzacohetes forma de 'sandwich de helado'. Chasis de T-72.",
        respuesta: "TOS-1",
        opciones: ["BM-21 Grad", "BM-30 Smerch", "TOS-1", "HIMARS"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/TOS-1_001.jpg/640px-TOS-1_001.jpg"
    },
    {
        descripcion: "Lanzacohetes con misiles en configuración de 6+6. 2 ventanas pequeñas y 1 grande. Cabina blindada.",
        respuesta: "M270 MLRS",
        opciones: ["BM-30 Smerch", "HIMARS", "M270 MLRS", "BM-21 Grad"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/M270_MLRS_001.jpg/640px-M270_MLRS_001.jpg"
    },
    {
        descripcion: "Chasis del TOA, con forma de caja. Cañon Vulcan de 20mm. Radar de seguimiento.",
        respuesta: "M163 VADS",
        opciones: ["Tunguska", "Patriot", "M163 VADS", "S-400"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/M163_VADS_001.jpg/640px-M163_VADS_001.jpg"
    },
    {
        descripcion: "Remolque con 2 ruedas. 3 misiles en 1+2. 3 misiles en 1+2.",
        respuesta: "Hawk",
        opciones: ["Patriot", "S-400", "Hawk", "9K37 Buk"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Hawk_001.jpg/640px-Hawk_001.jpg"
    },
    {
        descripcion: "Paquete de misiles en forma de caja. 'Cúpula' de radar enorme. Camión puede cambiar.",
        respuesta: "Patriot",
        opciones: ["S-400", "9K37 Buk", "Hawk", "Patriot"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Patriot_001.jpg/640px-Patriot_001.jpg"
    },
    {
        descripcion: "'Cúpula' de radar enorme. 4 Misiles muy grandes.",
        respuesta: "9K37 Buk",
        opciones: ["S-400", "Patriot", "Hawk", "9K37 Buk"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/9K37_Buk_001.jpg/640px-9K37_Buk_001.jpg"
    },
    {
        descripcion: "Camión con 8 ruedas. 4 Tubos de misiles muy grandes.",
        respuesta: "S-400",
        opciones: ["S-300", "Patriot", "9K37 Buk", "S-400"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/S-400_001.jpg/640px-S-400_001.jpg"
    },
    {
        descripcion: "Tren de aterrizaje retráctil. 2 hélices. Sin rotor de cola. Óptica en la 'barbilla'.",
        respuesta: "Ka-52 Alligator",
        opciones: ["Mi-28 Havoc", "Mi-26 Halo", "Ka-52 Alligator", "Mi-8 Hip"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Ka-52_001.jpg/640px-Ka-52_001.jpg"
    },
    {
        descripcion: "Cabina con forma de invernadero. Ruedas. 2 Motores.",
        respuesta: "Mi-8/17 Hip",
        opciones: ["Mi-24 Hind", "Mi-26 Halo", "Mi-8/17 Hip", "Ka-52 Alligator"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Mi-8_001.jpg/640px-Mi-8_001.jpg"
    },
    {
        descripcion: "Cabina separada con forma de burbuja. Soporte para armamento. 2 Motores. Chasis muy voluminoso.",
        respuesta: "Mi-24/35 Hind",
        opciones: ["Mi-8 Hip", "Mi-26 Halo", "Mi-24/35 Hind", "Ka-52 Alligator"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Mi-24_001.jpg/640px-Mi-24_001.jpg"
    },
    {
        descripcion: "Tren de aterrizaje en triciclo. 2 motores bajo la hélice. Grandes dimensiones. Cabina pequeña.",
        respuesta: "Mi-26 Halo",
        opciones: ["Mi-24 Hind", "Mi-8 Hip", "Mi-26 Halo", "CH-47 Chinook"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Mi-26_001.jpg/640px-Mi-26_001.jpg"
    },
    {
        descripcion: "Radar con forma de bola.",
        respuesta: "Mi-28 Havoc",
        opciones: ["Ka-52 Alligator", "Mi-26 Halo", "Mi-28 Havoc", "AH-64 Apache"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Mi-28_001.jpg/640px-Mi-28_001.jpg"
    },
    {
        descripcion: "4 aspas por hélice. Tren de aterrizaje retráctil. Estabilizador en lado izquierdo. Bulbo en la cola. 2 'motores'.",
        respuesta: "AS-332 Puma",
        opciones: ["NH-90 Caiman", "UH-60 Black Hawk", "AS-332 Puma", "CH-47 Chinook"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/AS-332_Puma_001.jpg/640px-AS-332_Puma_001.jpg"
    },
    {
        descripcion: "Forma muy angulosa. 2 'Parabrisas'. Tren de aterrizaje.",
        respuesta: "NH-90 Caiman",
        opciones: ["AS-332 Puma", "EC 665 Tiger", "NH-90 Caiman", "AH-64 Apache"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/NH-90_001.jpg/640px-NH-90_001.jpg"
    },
    {
        descripcion: "Cañón 30mm en el morro. Tren de aterrizaje en el lateral. Estabilizador de cola vertical. Cabina con 'Rampa'.",
        respuesta: "EC 665 Tiger",
        opciones: ["NH-90 Caiman", "AH-64 Apache", "EC 665 Tiger", "AH-1Z Viper"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Eurocopter_Tiger_001.jpg/640px-Eurocopter_Tiger_001.jpg"
    },
    {
        descripcion: "Cañon 30mm en mitad. Tren de aterrizaje bajo la cabina. Motores en el lateral con forma cuadrada. Ópticas en el morro.",
        respuesta: "AH-64 Apache",
        opciones: ["EC 665 Tiger", "AH-1Z Viper", "AH-64 Apache", "UH-60 Black Hawk"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/AH-64_Apache_001.jpg/640px-AH-64_Apache_001.jpg"
    },
    {
        descripcion: "2 Rotores verticales.",
        respuesta: "CH-47 Chinook",
        opciones: ["UH-60 Black Hawk", "CH-47 Chinook", "CH-53D Super Stallion", "V-22 Osprey"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/CH-47_Chinook_001.jpg/640px-CH-47_Chinook_001.jpg"
    },
    {
        descripcion: "Tren de aterrizaje Fijo. 4 aspas en las hélices. Cabina con 3 parabrisas. Estabilizador en ambos lados.",
        respuesta: "UH-60 Black Hawk",
        opciones: ["CH-47 Chinook", "AH-64 Apache", "UH-60 Black Hawk", "CH-53D Super Stallion"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/UH-60_Black_Hawk_001.jpg/640px-UH-60_Black_Hawk_001.jpg"
    },
    {
        descripcion: "Cañón a mitad, con forma esférica. Patines. Motores muy grandes. Fuselaje muy fino.",
        respuesta: "AH-1Z Viper",
        opciones: ["AH-64 Apache", "AH-1Z Viper", "AH-1W SuperCobra", "UH-60 Black Hawk"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/AH-1Z_Viper_001.jpg/640px-AH-1Z_Viper_001.jpg"
    },
    {
        descripcion: "Gran tamaño. Ventanas 'pequeñas'. Depósitos de combustible. 2 Motores.",
        respuesta: "CH-53D Super Stallion",
        opciones: ["CH-47 Chinook", "V-22 Osprey", "CH-53D Super Stallion", "UH-60 Black Hawk"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/CH-53D_Super_Stallion_001.jpg/640px-CH-53D_Super_Stallion_001.jpg"
    },
    {
        descripcion: "Doble timón de cola. Motores en los extremos.",
        respuesta: "V-22 Osprey",
        opciones: ["CH-53D Super Stallion", "CH-47 Chinook", "V-22 Osprey", "UH-60 Black Hawk"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/V-22_Osprey_001.jpg/640px-V-22_Osprey_001.jpg"
    },
    {
        descripcion: "Alas rectas. Pilones para armamento.",
        respuesta: "Su-25 Frogfoot",
        opciones: ["Su-34 Fullback", "MiG-29 Fulcrum", "Su-25 Frogfoot", "F-16 Fighting Falcon"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Su-25_001.jpg/640px-Su-25_001.jpg"
    },
    {
        descripcion: "Motores descubiertos. Camuflaje digital.",
        respuesta: "Su-57 Felon",
        opciones: ["Su-30 Flanker", "Su-35 Flanker", "Su-57 Felon", "F-22 Raptor"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Su-57_001.jpg/640px-Su-57_001.jpg"
    },
    {
        descripcion: "Motores muy grandes. Color gris con estrella roja.",
        respuesta: "MiG-31 Foxhound",
        opciones: ["MiG-29 Fulcrum", "Su-27 Flanker", "MiG-31 Foxhound", "Su-35 Flanker"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/MiG-31_001.jpg/640px-MiG-31_001.jpg"
    },
    {
        descripcion: "Forma de pingüino nadando. Motores en los laterales.",
        respuesta: "Tu-22M3",
        opciones: ["Tu-160", "Tu-22M3", "An-22", "An-26"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Tu-22M3_001.jpg/640px-Tu-22M3_001.jpg"
    },
    {
        descripcion: "'Cicatrices' y pintura plateada.",
        respuesta: "F-35 Lightning",
        opciones: ["F-22 Raptor", "F-15 Eagle", "F-35 Lightning", "F-16 Fighting Falcon"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/F-35_Lightning_II_001.jpg/640px-F-35_Lightning_II_001.jpg"
    },
    {
        descripcion: "Estabilizador de cola recto. Protuberancias al lado de cada motor.",
        respuesta: "F-15 Eagle",
        opciones: ["F-16 Fighting Falcon", "F-14 Tomcat", "F-15 Eagle", "F-22 Raptor"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/F-15_Eagle_001.jpg/640px-F-15_Eagle_001.jpg"
    },
    {
        descripcion: "Forma muy angulosa. Timones de cola inclinados.",
        respuesta: "F-22 Raptor",
        opciones: ["F-35 Lightning", "F-15 Eagle", "F-22 Raptor", "Eurofighter"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/F-22_Raptor_001.jpg/640px-F-22_Raptor_001.jpg"
    },
    {
        descripcion: "Solo un estabilizador. Solo un motor.",
        respuesta: "F-16 Fighting Falcon",
        opciones: ["F-15 Eagle", "F-22 Raptor", "F-16 Fighting Falcon", "F-35 Lightning"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/F-16_Fighting_Falcon_001.jpg/640px-F-16_Fighting_Falcon_001.jpg"
    },
    {
        descripcion: "Ala delta. Solo un estabilizador.",
        respuesta: "Eurofighter",
        opciones: ["Rafale", "F-22 Raptor", "Eurofighter", "F-35 Lightning"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Eurofighter_Typhoon_001.jpg/640px-Eurofighter_Typhoon_001.jpg"
    },
    {
        descripcion: "Alas inclinadas para abajo. Entrada al motor circular.",
        respuesta: "AV-8 Harrier",
        opciones: ["F-35 Lightning", "F-16 Fighting Falcon", "AV-8 Harrier", "F-22 Raptor"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/AV-8B_Harrier_II_001.jpg/640px-AV-8B_Harrier_II_001.jpg"
    },
    {
        descripcion: "4 hélices normales. Cabina de invernadero.",
        respuesta: "C-130 Hercules",
        opciones: ["C-17 Globemaster III", "C-5 Galaxy", "A400M Atlas", "C-130 Hercules"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/C-130_Hercules_001.jpg/640px-C-130_Hercules_001.jpg"
    },
    {
        descripcion: "Armamento en lateral. Igual a Hercules.",
        respuesta: "AC-130 Gunship",
        opciones: ["C-130 Hercules", "C-17 Globemaster III", "AC-130 Gunship", "P-3 Orion"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/AC-130_Gunship_001.jpg/640px-AC-130_Gunship_001.jpg"
    },
    {
        descripcion: "Dorito negro con ángulos.",
        respuesta: "F-117 Nighthawk",
        opciones: ["B-2 Spirit", "F-22 Raptor", "F-35 Lightning", "F-117 Nighthawk"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/F-117_Nighthawk_001.jpg/640px-F-117_Nighthawk_001.jpg"
    },
    {
        descripcion: "Dorito negro aerodinámico. Cola con forma de sierra.",
        respuesta: "B-2 Spirit",
        opciones: ["F-117 Nighthawk", "B-2 Spirit", "B-1 Lancer", "Tu-160"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/B-2_Spirit_001.jpg/640px-B-2_Spirit_001.jpg"
    },
    {
        descripcion: "Elevadores en la cola.",
        respuesta: "A400M Atlas",
        opciones: ["C-130 Hercules", "C-17 Globemaster III", "A400M Atlas", "C-5 Galaxy"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/A400M_Atlas_001.jpg/640px-A400M_Atlas_001.jpg"
    },
    {
        descripcion: "Pincho en la cola. 4 hélices.",
        respuesta: "P-3 Orion",
        opciones: ["E-3 Sentry", "C-130 Hercules", "P-3 Orion", "C-17 Globemaster III"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/P-3_Orion_001.jpg/640px-P-3_Orion_001.jpg"
    },
    {
        descripcion: "Paella.",
        respuesta: "E-3 Sentry",
        opciones: ["P-3 Orion", "C-130 Hercules", "E-3 Sentry", "A400M Atlas"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/E-3_Sentry_001.jpg/640px-E-3_Sentry_001.jpg"
    }
];

let currentQuestion = 0;
let score = 0;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function displayQuestion() {
    const quizElement = document.getElementById("quiz-container");
    const q = preguntas[currentQuestion];

    // Mezcla las opciones para que no estén siempre en el mismo orden
    const opcionesMezcladas = [...q.opciones];
    shuffleArray(opcionesMezcladas);

    let optionsHTML = "";
    opcionesMezcladas.forEach(op => {
        optionsHTML += `
            <button class="option-btn w-full mb-2 p-3 bg-blue-100 hover:bg-blue-200 text-left rounded-lg transition-colors duration-200"
                    onclick="checkAnswer('${op}')">
                ${op}
            </button>
        `;
    });
    // ... dentro de displayQuestion ...
quizElement.innerHTML = `
    <div class="text-center mb-6">
        <h3 class="text-xl font-semibold text-gray-800">Pregunta ${currentQuestion + 1} de ${preguntas.length}</h3>
        <p class="text-gray-600 mt-2"><strong>Descripción:</strong> ${q.descripcion}</p>
    </div>
    <div class="image-container text-center mb-6">
        <!-- Imagen genérica que al hacer clic abre la real en otra pestaña, dejando que el navegador la muestre como imagen -->
        <img src="https://placehold.co/600x300?text=Haz+clic+para+ver+imagen" 
             alt="Imagen de ${q.respuesta}" 
             class="mx-auto rounded-lg shadow-md cursor-pointer"
             onclick="abrirImagenEnPestaña('${q.imagen}')"> <!-- Usamos la URL original aquí -->
    </div>
    <div class="options">
        ${optionsHTML}
    </div>
`;

// Función para abrir la imagen real en una nueva pestaña
function abrirImagenEnPestaña(url) {
    // Abrir la URL de la imagen directamente en una nueva pestaña
    // Dejar que el navegador maneje el tamaño y visualización
    window.open(url, '_blank'); 
}


function checkAnswer(selectedOption) {
    const q = preguntas[currentQuestion];
    const buttons = document.querySelectorAll('.option-btn');
    const isCorrect = selectedOption === q.respuesta;

    buttons.forEach(button => {
        button.disabled = true; // Deshabilitar botones después de responder
        if (button.textContent.trim() === q.respuesta) {
            button.classList.remove('bg-blue-100', 'hover:bg-blue-200');
            button.classList.add('bg-green-100', 'text-green-800');
        }
        if (isCorrect && button.textContent.trim() === selectedOption) {
            button.classList.add('bg-green-500', 'text-white');
        } else if (!isCorrect && button.textContent.trim() === selectedOption) {
            button.classList.add('bg-red-500', 'text-white');
        }
    });

    if (isCorrect) {
        score++;
    }

    // Esperar un momento antes de pasar a la siguiente pregunta
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < preguntas.length) {
            displayQuestion();
        } else {
            showResults();
        }
    }, 1500); // 1.5 segundos antes de avanzar
}

function showResults() {
    const quizElement = document.getElementById("quiz-container");
    const resultElement = document.getElementById("result-container");

    quizElement.classList.add("hidden");
    resultElement.classList.remove("hidden");

    resultElement.innerHTML = `
        <h2 class="text-2xl font-bold text-gray-800 mb-4">¡Test completado!</h2>
        <p class="text-lg text-gray-700">Has acertado <span class="font-bold">${score}</span> de <span class="font-bold">${preguntas.length}</span> preguntas.</p>
        <button class="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                onclick="restartQuiz()">
            Volver a empezar
        </button>
    `;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("quiz-container").classList.remove("hidden");
    document.getElementById("result-container").classList.add("hidden");
    displayQuestion();
}

// Mostrar la primera pregunta al cargar la página

window.onload = displayQuestion;

