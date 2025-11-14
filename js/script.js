// script.js

// --- Array de preguntas (con imágenes locales) ---
const preguntas = [
    {
        descripcion: "Evacuador de gases al principio del cañón. Tren Christie.",
        respuesta: "T-55",
        opciones: ["T-62", "T-55", "T-72B", "M1 Abrams"],
        imagen: "imagenes/T-55.jpg" // Ruta local
    },
    {
        descripcion: "Evacuador de gases a mitad del cañón. Torre redondea. Tren Christie.",
        respuesta: "T-62",
        opciones: ["T-55", "T-62", "T-80U", "Leopard 1"],
        imagen: "imagenes/T-62.png" // Ruta local
    },
    {
        descripcion: "Recubierto de cubitos. Faro al lado contrario. Cara torre con forma de esquina. Ruedas de tapacubos.",
        respuesta: "T-64BV",
        opciones: ["T-72B", "T-64BV", "T-80U", "T-90A"],
        imagen: "imagenes/T-64BV.jpg" // Ruta local
    },
    {
        descripcion: "Ruedas lisas. Tres periscopios. Snorkel. A veces lleva faldón. Kontact 5 forma de paraguas.",
        respuesta: "T-80U/UD",
        opciones: ["T-72B3", "T-80U/UD", "T-80BVM", "T-90M"],
        imagen: "imagenes/T-80U-UD.jpg" // Ruta local
    },
    {
        descripcion: "Tres periscopios. Blindaje torre en forma de platillo volante. A veces lleva faldón. Ruedas lisas.",
        respuesta: "T-80BVM",
        opciones: ["T-80U/UD", "T-72B3", "T-80BVM", "T-90A"],
        imagen: "imagenes/T-80BVM.jpg" // Ruta local
    },
    {
        descripcion: "Faldones ligeros. Ruedas margarita. Una harta de lanza fumígenos.",
        respuesta: "T-72B3",
        opciones: ["T-72B", "T-64BV", "T-72B3", "PT-91"],
        imagen: "imagenes/T-72B3.png" // Ruta local
    },
    {
        descripcion: "Lanza-fumígenos 2+4. Ruedas margarita. 3 placas de blindaje.",
        respuesta: "PT-91",
        opciones: ["T-72B3", "PT-91", "T-90A", "Leopard 2"],
        imagen: "imagenes/PT-91.jpg" // Ruta local
    },
    {
        descripcion: "Ojos del T-90. Blindaje de torre puesto matizado. Escape lado izquierdo.",
        respuesta: "T-90A",
        opciones: ["T-90M", "T-90A", "T-80U", "T-14 Armata"],
        imagen: "imagenes/T-90A.jpg" // Ruta local
    },
    {
        descripcion: "ERA Relikt muy plana. 'Rejilla' (puede o no llevarla). Lanza fumígenos. Faldones muy tochos. Torre recta (sin platillo volante).",
        respuesta: "T-90M",
        opciones: ["T-90A", "T-90M", "T-80BVM", "T-14 Armata"],
        imagen: "imagenes/T-90M.jpg" // Ruta local
    },
    {
        descripcion: "'Pómulos'. Glacis superior muy plano. Preinstalación del peri. Lanza-fumígenos.",
        respuesta: "M-60",
        opciones: ["M1 Abrams", "M-60", "Challenger 2", "Leopard 2"],
        imagen: "imagenes/M-60.jpg" // Ruta local
    },
    {
        descripcion: "Peri frente al cargador. Lanzas en forma de colmena. 'Pómulos'. Conductor en el centro.",
        respuesta: "M1A1 ABRAMS",
        opciones: ["M1A2 ABRAMS", "M1A1 ABRAMS", "M1 Abrams", "Leopard 2A4"],
        imagen: "imagenes/M1A1-ABRAMS.jpg" // Ruta local
    },
    {
        descripcion: "Cesta que rodea la torre. Peri frente al cargador. Faldones ligeros.",
        respuesta: "M1A2 ABRAMS",
        opciones: ["M1A1 ABRAMS", "M1A2 ABRAMS", "M1A2 SEP V3", "M1 Abrams"],
        imagen: "imagenes/M1A2-ABRAMS.jpg" // Ruta local
    },
    {
        descripcion: "Arma remota. Elementos de puntería. Peri con forma de cubo de basura.",
        respuesta: "M1A2 SEP V3",
        opciones: ["M1A2 ABRAMS", "M1A1 ABRAMS", "M1A2 SEP V3", "M1 Abrams"],
        imagen: "imagenes/M1A2-SEP-V3.jpg" // Ruta local
    },
    {
        descripcion: "Caja con lo de apuntar. Extintores. Peri del jefe.",
        respuesta: "AMX-56 Leclerc",
        opciones: ["AMX-30", "Leopard 2", "AMX-56 Leclerc", "Challenger 2"],
        imagen: "imagenes/AMX-56-LECLERC.png" // Ruta local
    },
    {
        descripcion: "Lanza fumígenos en ramo. 'Radiador'. MG 3.",
        respuesta: "Challenger 2",
        opciones: ["Challenger 1", "Challenger 2", "Chieftain", "FV 510 Warrior"],
        imagen: "imagenes/CHALLENGER-2.jpg" // Ruta local
    },
    {
        descripcion: "Torre inclinada. Escape a ambos lados. Mantelete muy anguloso. Faros redondos alemanes.",
        respuesta: "C1 Ariete",
        opciones: ["Leopard 1", "C1 Ariete", "Leopard 2", "M60 Patton"],
        imagen: "imagenes/C1-ARIETE.jpg" // Ruta local
    },
    {
        descripcion: "Elementos de puntería. Periscopio del jefe. Torre plana.",
        respuesta: "Leopard 1",
        opciones: ["Leopard 2A4", "Leopard 1", "M60 Patton", "M48 Patton"],
        imagen: "imagenes/LEOPARD-1.jpg" // Ruta local
    },
    {
        descripcion: "Torre forma de cuña. Elementos de puntería. Cañón más largo. Faros redondos.",
        respuesta: "Leopard 2A4",
        opciones: ["Leopard 2A5", "Leopard 1", "Leopard 2A4", "Leopard 2A6"],
        imagen: "imagenes/LEOPARD-2A4.jpg" // Ruta local
    },
    {
        descripcion: "Peri atrasado. Barcaza reforzada. Cámara conductor. Faros cuadrados.",
        respuesta: "Leopard 2A6",
        opciones: ["Leopard 2A4", "Leopard 2A5", "Leopard 2A6", "Leopard 2A7"],
        imagen: "imagenes/LEOPARD-2A6.AVIF" // Ruta local
    },
    {
        descripcion: "Cañón 73mm corto. 5 ruedas tren rodaje. Barcaza con forma de barco. Torre adelantada.",
        respuesta: "BMD-1",
        opciones: ["BMD-2", "BMP-1", "BMD-1", "BRDM-2"],
        imagen: "imagenes/BMD-1.jpg" // Ruta local
    },
    {
        descripcion: "Cañón fino y alargado de 30mm ATGM. 5 ruedas tren rodaje. Barcaza con forma de barco.",
        respuesta: "BMD-2",
        opciones: ["BMD-1", "BMD-2", "BMP-2", "BTR-82A"],
        imagen: "imagenes/BMD-2.jpg" // Ruta local
    },
    {
        descripcion: "Cañones de 100mm y 30mm. 5 ruedas de rodaje. 3+3 lanza-artificios.",
        respuesta: "BMD-4",
        opciones: ["BMD-3", "BMP-3", "BMD-4", "BTR-4"],
        imagen: "imagenes/BMD-4.jpg" // Ruta local
    },
    {
        descripcion: "Faldón ligero circular. 2 escotillas. Cañón 73mm corto. 6 ruedas tren rodaje.",
        respuesta: "BMP-1",
        opciones: ["BMP-2", "BMP-3", "BMD-1", "BMP-1"],
        imagen: "imagenes/BMP-1.jpg" // Ruta local
    },
    {
        descripcion: "Faldón ligero circular. Cañón 30mm. 6 ruedas tren rodaje.",
        respuesta: "BMP-2",
        opciones: ["BMP-1", "BMP-3", "BMD-2", "BMP-2"],
        imagen: "imagenes/BMP-2.png" // Ruta local
    },
    {
        descripcion: "Doble cañón. 3+3 lanza fumígenos. Faros muy juntos. 6 Ruedas lisas dobles.",
        respuesta: "BMP-3",
        opciones: ["BMP-2", "BMD-4", "BTR-3", "BMP-3"],
        imagen: "imagenes/BMP-3.jpg" // Ruta local
    },
    {
        descripcion: "Cañón 30mm con forma de 'porra'.",
        respuesta: "BMP-T",
        opciones: ["BMP-3", "BTR-82A", "BMP-T", "BRDM-2"],
        imagen: "imagenes/BMP-T.jpeg" // Ruta local
    },
    {
        descripcion: "Rampa de vadeo. Pequeña torre. 4 ruedas.",
        respuesta: "BRDM-2",
        opciones: ["BRDM-1", "BTR-80", "BRDM-2", "BTR-70"],
        imagen: "imagenes/BRDM-2.jpg" // Ruta local
    },
    {
        descripcion: "Escalón donde el conductor. Lanzador TOW.",
        respuesta: "M2/M3 Bradley",
        opciones: ["M1126 Stryker", "FV 510 Warrior", "M2/M3 Bradley", "CV-90"],
        imagen: "imagenes/M2-M3-BRADLEY.jpg" // Ruta local
    },
    {
        descripcion: "Faros que sobresalen. Cesta muy característica. Separación 3era y 4ta rueda. 8 Ruedas. Ametralladora 12,7mm con lanza fumígenos.",
        respuesta: "M1126 Stryker",
        opciones: ["M2/M3 Bradley", "LAV 25", "M1126 Stryker", "Ajax"],
        imagen: "imagenes/M1126-STRYKER.jpg" // Ruta local
    },
    {
        descripcion: "Torre 'Cara de rana'. Tren de rodaje Christie. Plano y alargado.",
        respuesta: "MTLB",
        opciones: ["GAZ Tiger", "KAMAZ Typhoon", "MTLB", "BTR-80"],
        imagen: "imagenes/MTLB.jpg" // Ruta local
    },
    {
        descripcion: "12,7mm en el techo. Puerta acceso GMP. Depósito combustible. Tren christie. Forma de caja.",
        respuesta: "M-113",
        opciones: ["AAV-7A1", "M-113", "LAV III", "GTK Boxer"],
        imagen: "imagenes/M-113.jpg" // Ruta local
    },
    {
        descripcion: "Parrilla característica similar a un jeep.",
        respuesta: "HMMWV",
        opciones: ["IVECO LMV", "HMMWV", "Renault Sherpa 2", "Panhard VPS"],
        imagen: "imagenes/HMMWV.jpg" // Ruta local
    },
    {
        descripcion: "Puerta pequeña sobre la rueda. Puesto con máquina. 2 ejes.",
        respuesta: "VAB",
        opciones: ["VBL", "VAB", "Fuchs", "GTK Boxer"],
        imagen: "imagenes/VAB.jpg" // Ruta local
    },
    {
        descripcion: "Separación entre conductor y copiloto. Falta de parrilla. Radiador lateral.",
        respuesta: "VBL",
        opciones: ["VAB", "FV 432 Bulldog", "VBL", "Panhard VPS"],
        imagen: "imagenes/VBL.jpg" // Ruta local
    },
    {
        descripcion: "Cantidad tremenda de ERA. Afuste con escudo.",
        respuesta: "GTK Boxer",
        opciones: ["Fuchs", "Namer", "GTK Boxer", "Patria AMV"],
        imagen: "imagenes/GTK-BOXER.webp" // Ruta local
    },
    {
        descripcion: "Chasis T-80 con motor T-72. Torre mas central que otras ATPs. Frenos de recuperación. Torre muy grande.",
        respuesta: "2S19 MSTA",
        opciones: ["2S35 Koalitsaya", "2S1 Gvozdika", "2S19 MSTA", "M109"],
        imagen: "imagenes/2S19-MSTA.jpg" // Ruta local
    },
    {
        descripcion: "Frenos de recuperación escondidos. Tren de rodaje del T-90.",
        respuesta: "2S35 Koalitsaya",
        opciones: ["2S19 MSTA", "2S3 Akatsiya", "2S35 Koalitsaya", "Palmaria 155mm"],
        imagen: "imagenes/2S35-KOALITSAYA.webp" // Ruta local
    },
    {
        descripcion: "Torre mas chafada. Chasis forma de barco. Tren de rodaje christie.",
        respuesta: "2S1 Gvozdika",
        opciones: ["2S3 Akatsiya", "2S1 Gvozdika", "FH 70", "M109"],
        imagen: "imagenes/2S1-GVOZDIKA.jpg" // Ruta local
    },
    {
        descripcion: "Tren vickers. 2 recuperadores de retroceso. Torre mas voluminosa.",
        respuesta: "2S3 Akatsiya",
        opciones: ["2S1 Gvozdika", "M109", "2S3 Akatsiya", "AS-90 Braveheart"],
        imagen: "imagenes/2S3-AKATSIYA.jpg" // Ruta local
    },
    {
        descripcion: "Cañón enorme. Tripulación descubierta. Chasis T-80. Barcaza sobresale por delante.",
        respuesta: "27M Malka",
        opciones: ["2S35 Koalitsaya", "2S1 Gvozdika", "27M Malka", "M109"],
        imagen: "imagenes/27M-MALKA.jpg" // Ruta local
    },
    {
        descripcion: "2 cañones 30mm. Radar de adquisición. Radar de seguimiento. 4 misiles por lado.",
        respuesta: "Tunguska",
        opciones: ["Patriot", "Hawk", "Tunguska", "S-400"],
        imagen: "imagenes/TUNGUSKA.jpg" // Ruta local
    },
    {
        descripcion: "Faros en frente del chasis. Freno de boca sencillo. Peri del jefe. Frente de torre circular.",
        respuesta: "M109",
        opciones: ["2S1 Gvozdika", "FH 70", "M109", "M777"],
        imagen: "imagenes/M109.webp" // Ruta local
    },
    {
        descripcion: "Sistema de carga. Cofres de almacenaje. Cureña. Trinca.",
        respuesta: "Caesar",
        opciones: ["FH 70", "Panzeraubitz 2000", "Caesar", "M109"],
        imagen: "imagenes/CAESAR.jpg" // Ruta local
    },
    {
        descripcion: "Luces sobre el glacis. Base del cañón 'solid'. Peri.",
        respuesta: "Panzeraubitz 2000",
        opciones: ["M109", "Caesar", "Panzeraubitz 2000", "M777"],
        imagen: "imagenes/PANZERAUBITZE-2000.webn" // Ruta local
    },
    {
        descripcion: "Mazacote grande detrás del cañón. Espacio 'vacío'. 3 ejes.",
        respuesta: "Archer FH77BW L52",
        opciones: ["M777", "Panzeraubitz 2000", "Archer FH77BW L52", "M109"],
        imagen: "imagenes/ARCHER-FH77BW-L52.jpg" // Ruta local
    },
    {
        descripcion: "2 ejes bajo la pieza. Tubo muy largo.",
        respuesta: "M777",
        opciones: ["M109", "M777", "FH 70", "M114 105"],
        imagen: "imagenes/M777.jpg" // Ruta local
    },
    {
        descripcion: "Lanzacohetes con misiles en configuración de 6. Cabina blindada hexagonal. Chasis 2+1. 'Asa' encima de cohetes.",
        respuesta: "HIMARS",
        opciones: ["M270 MLRS", "BM-21 Grad", "HIMARS", "BM-30 Smerch"],
        imagen: "imagenes/HIMARS.jpg" // Ruta local
    },
    {
        descripcion: "Tubos muy muy largos. Cuatro ruedas distribuidas de forma uniforme. Cabina del conductor solo en un lado.",
        respuesta: "BM-30 Smerch",
        opciones: ["BM-21 Grad", "TOS-1", "BM-30 Smerch", "HIMARS"],
        imagen: "imagenes/BM-30-SMERCH.webp" // Ruta local
    },
    {
        descripcion: "Cohetes metidos en 'caja'. Camión con morro. Lanzacohetes sobre eje trasero.",
        respuesta: "BM-21 Grad",
        opciones: ["BM-30 Smerch", "M270 MLRS", "BM-21 Grad", "TOS-1"],
        imagen: "imagenes/BM-21-GRAD.jpg" // Ruta local
    },
    {
        descripcion: "Lanzacohetes forma de 'sandwich de helado'. Chasis de T-72.",
        respuesta: "TOS-1",
        opciones: ["BM-21 Grad", "BM-30 Smerch", "TOS-1", "HIMARS"],
        imagen: "imagenes/TOS-1.jpg" // Ruta local
    },
    {
        descripcion: "Lanzacohetes con misiles en configuración de 6+6. 2 ventanas pequeñas y 1 grande. Cabina blindada.",
        respuesta: "M270 MLRS",
        opciones: ["BM-30 Smerch", "HIMARS", "M270 MLRS", "BM-21 Grad"],
        imagen: "imagenes/M270-MLRS.jpg" // Ruta local
    },
    {
        descripcion: "Chasis del TOA, con forma de caja. Cañon Vulcan de 20mm. Radar de seguimiento.",
        respuesta: "M163 VADS",
        opciones: ["Tunguska", "Patriot", "M163 VADS", "S-400"],
        imagen: "imagenes/M163-VADS.jpg" // Ruta local
    },
    {
        descripcion: "Remolque con 2 ruedas. 3 misiles en 1+2. 3 misiles en 1+2.",
        respuesta: "Hawk",
        opciones: ["Patriot", "S-400", "Hawk", "9K37 Buk"],
        imagen: "imagenes/HAWK.jpeg" // Ruta local
    },
    {
        descripcion: "Paquete de misiles en forma de caja. 'Cúpula' de radar enorme. Camión puede cambiar.",
        respuesta: "Patriot",
        opciones: ["S-400", "9K37 Buk", "Hawk", "Patriot"],
        imagen: "imagenes/PATRIOT.jpg" // Ruta local
    },
    {
        descripcion: "'Cúpula' de radar enorme. 4 Misiles muy grandes.",
        respuesta: "9K37 Buk",
        opciones: ["S-400", "Patriot", "Hawk", "9K37 Buk"],
        imagen: "imagenes/9K37-BUK.jpg" // Ruta local
    },
    {
        descripcion: "Camión con 8 ruedas. 4 Tubos de misiles muy grandes.",
        respuesta: "S-400",
        opciones: ["S-300", "Patriot", "9K37 Buk", "S-400"],
        imagen: "imagenes/S-400.jpg" // Ruta local
    },
    {
        descripcion: "Tren de aterrizaje retráctil. 2 hélices. Sin rotor de cola. Óptica en la 'barbilla'.",
        respuesta: "Ka-52 Alligator",
        opciones: ["Mi-28 Havoc", "Mi-26 Halo", "Ka-52 Alligator", "Mi-8 Hip"],
        imagen: "imagenes/KA-52-ALLIGATOR.jpg" // Ruta local
    },
    {
        descripcion: "Cabina con forma de invernadero. Ruedas. 2 Motores.",
        respuesta: "Mi-8/17 Hip",
        opciones: ["Mi-24 Hind", "Mi-26 Halo", "Mi-8/17 Hip", "Ka-52 Alligator"],
        imagen: "imagenes/MI-8-17-HIP.png" // Ruta local
    },
    {
        descripcion: "Cabina separada con forma de burbuja. Soporte para armamento. 2 Motores. Chasis muy voluminoso.",
        respuesta: "Mi-24/35 Hind",
        opciones: ["Mi-8 Hip", "Mi-26 Halo", "Mi-24/35 Hind", "Ka-52 Alligator"],
        imagen: "imagenes/MI-24-35-HIND.jpg" // Ruta local
    },
    {
        descripcion: "Tren de aterrizaje en triciclo. 2 motores bajo la hélice. Grandes dimensiones. Cabina pequeña.",
        respuesta: "Mi-26 Halo",
        opciones: ["Mi-24 Hind", "Mi-8 Hip", "Mi-26 Halo", "CH-47 Chinook"],
        imagen: "imagenes/MI-26-HALO.jpg" // Ruta local
    },
    {
        descripcion: "Radar con forma de bola.",
        respuesta: "Mi-28 Havoc",
        opciones: ["Ka-52 Alligator", "Mi-26 Halo", "Mi-28 Havoc", "AH-64 Apache"],
        imagen: "imagenes/MI-28-HAVOC.jpg" // Ruta local
    },
    {
        descripcion: "4 aspas por hélice. Tren de aterrizaje retráctil. Estabilizador en lado izquierdo. Bulbo en la cola. 2 'motores'.",
        respuesta: "AS-332 Puma",
        opciones: ["NH-90 Caiman", "UH-60 Black Hawk", "AS-332 Puma", "CH-47 Chinook"],
        imagen: "imagenes/AS-332-PUMA.jpg" // Ruta local
    },
    {
        descripcion: "Forma muy angulosa. 2 'Parabrisas'. Tren de aterrizaje.",
        respuesta: "NH-90 Caiman",
        opciones: ["AS-332 Puma", "EC 665 Tiger", "NH-90 Caiman", "AH-64 Apache"],
        imagen: "imagenes/NH-90-CAIMAN.jpg" // Ruta local
    },
    {
        descripcion: "Cañón 30mm en el morro. Tren de aterrizaje en el lateral. Estabilizador de cola vertical. Cabina con 'Rampa'.",
        respuesta: "EC 665 Tiger",
        opciones: ["NH-90 Caiman", "AH-64 Apache", "EC 665 Tiger", "AH-1Z Viper"],
        imagen: "imagenes/EC-665-TIGER.jpg" // Ruta local
    },
    {
        descripcion: "Cañon 30mm en mitad. Tren de aterrizaje bajo la cabina. Motores en el lateral con forma cuadrada. Ópticas en el morro.",
        respuesta: "AH-64 Apache",
        opciones: ["EC 665 Tiger", "AH-1Z Viper", "AH-64 Apache", "UH-60 Black Hawk"],
        imagen: "imagenes/AH-64-APACHE.jpg" // Ruta local
    },
    {
        descripcion: "2 Rotores verticales.",
        respuesta: "CH-47 Chinook",
        opciones: ["UH-60 Black Hawk", "CH-47 Chinook", "CH-53D Super Stallion", "V-22 Osprey"],
        imagen: "imagenes/CH-47-CHINOOK.jpg" // Ruta local
    },
    {
        descripcion: "Tren de aterrizaje Fijo. 4 aspas en las hélices. Cabina con 3 parabrisas. Estabilizador en ambos lados.",
        respuesta: "UH-60 Black Hawk",
        opciones: ["CH-47 Chinook", "AH-64 Apache", "UH-60 Black Hawk", "CH-53D Super Stallion"],
        imagen: "imagenes/UH-60-BLACK-HAWK.jpg" // Ruta local
    },
    {
        descripcion: "Cañón a mitad, con forma esférica. Patines. Motores muy grandes. Fuselaje muy fino.",
        respuesta: "AH-1Z Viper",
        opciones: ["AH-64 Apache", "AH-1Z Viper", "AH-1W SuperCobra", "UH-60 Black Hawk"],
        imagen: "imagenes/AH-1Z-VIPER.jpg" // Ruta local
    },
    {
        descripcion: "Gran tamaño. Ventanas 'pequeñas'. Depósitos de combustible. 2 Motores.",
        respuesta: "CH-53D Super Stallion",
        opciones: ["CH-47 Chinook", "V-22 Osprey", "CH-53D Super Stallion", "UH-60 Black Hawk"],
        imagen: "imagenes/CH-53D-SUPER-STALLION.jpg" // Ruta local
    },
    {
        descripcion: "Doble timón de cola. Motores en los extremos.",
        respuesta: "V-22 Osprey",
        opciones: ["CH-53D Super Stallion", "CH-47 Chinook", "V-22 Osprey", "UH-60 Black Hawk"],
        imagen: "imagenes/V-22-OSPREY.jpg" // Ruta local
    },
    {
        descripcion: "Alas rectas. Pilones para armamento.",
        respuesta: "Su-25 Frogfoot",
        opciones: ["Su-34 Fullback", "MiG-29 Fulcrum", "Su-25 Frogfoot", "F-16 Fighting Falcon"],
        imagen: "imagenes/SU-25-FROGFOOT.jpg" // Ruta local
    },
    {
        descripcion: "Motores descubiertos. Camuflaje digital.",
        respuesta: "Su-57 Felon",
        opciones: ["Su-30 Flanker", "Su-35 Flanker", "Su-57 Felon", "F-22 Raptor"],
        imagen: "imagenes/SU-57-FELON.jpg" // Ruta local
    },
    {
        descripcion: "Motores muy grandes. Color gris con estrella roja.",
        respuesta: "MiG-31 Foxhound",
        opciones: ["MiG-29 Fulcrum", "Su-27 Flanker", "MiG-31 Foxhound", "Su-35 Flanker"],
        imagen: "imagenes/MIG-31-FOXHOUND.jpg" // Ruta local
    },
    {
        descripcion: "Forma de pingüino nadando. Motores en los laterales.",
        respuesta: "Tu-22M3",
        opciones: ["Tu-160", "Tu-22M3", "An-22", "An-26"],
        imagen: "imagenes/TU-22M3.webp" // Ruta local
    },
    {
        descripcion: "'Cicatrices' y pintura plateada.",
        respuesta: "F-35 Lightning",
        opciones: ["F-22 Raptor", "F-15 Eagle", "F-35 Lightning", "F-16 Fighting Falcon"],
        imagen: "imagenes/F-35-LIGHTNING.jpg" // Ruta local
    },
    {
        descripcion: "Estabilizador de cola recto. Protuberancias al lado de cada motor.",
        respuesta: "F-15 Eagle",
        opciones: ["F-16 Fighting Falcon", "F-14 Tomcat", "F-15 Eagle", "F-22 Raptor"],
        imagen: "imagenes/F-15-EAGLE.jpg" // Ruta local
    },
    {
        descripcion: "Forma muy angulosa. Timones de cola inclinados.",
        respuesta: "F-22 Raptor",
        opciones: ["F-35 Lightning", "F-15 Eagle", "F-22 Raptor", "Eurofighter"],
        imagen: "imagenes/F-22-RAPTOR.jpg" // Ruta local
    },
    {
        descripcion: "Solo un estabilizador. Solo un motor.",
        respuesta: "F-16 Fighting Falcon",
        opciones: ["F-15 Eagle", "F-22 Raptor", "F-16 Fighting Falcon", "F-35 Lightning"],
        imagen: "imagenes/F-16-FIGHTING-FALCON.jpg" // Ruta local
    },
    {
        descripcion: "Ala delta. Solo un estabilizador.",
        respuesta: "Eurofighter",
        opciones: ["Rafale", "F-22 Raptor", "Eurofighter", "F-35 Lightning"],
        imagen: "imagenes/EUROFIGHTER.jpg" // Ruta local
    },
    {
        descripcion: "Alas inclinadas para abajo. Entrada al motor circular.",
        respuesta: "AV-8 Harrier",
        opciones: ["F-35 Lightning", "F-16 Fighting Falcon", "AV-8 Harrier", "F-22 Raptor"],
        imagen: "imagenes/AV-8-HARRIER.jpg" // Ruta local
    },
    {
        descripcion: "4 hélices normales. Cabina de invernadero.",
        respuesta: "C-130 Hercules",
        opciones: ["C-17 Globemaster III", "C-5 Galaxy", "A400M Atlas", "C-130 Hercules"],
        imagen: "imagenes/C-130-HERCULES.jpg" // Ruta local
    },
    {
        descripcion: "Armamento en lateral. Igual a Hercules.",
        respuesta: "AC-130 Gunship",
        opciones: ["C-130 Hercules", "C-17 Globemaster III", "AC-130 Gunship", "P-3 Orion"],
        imagen: "imagenes/AC-130-GUNSHIP.jpg" // Ruta local
    },
    {
        descripcion: "Dorito negro con ángulos.",
        respuesta: "F-117 Nighthawk",
        opciones: ["B-2 Spirit", "F-22 Raptor", "F-35 Lightning", "F-117 Nighthawk"],
        imagen: "imagenes/F-117-NIGHTHAWK.jpg" // Ruta local
    },
    {
        descripcion: "Dorito negro aerodinámico. Cola con forma de sierra.",
        respuesta: "B-2 Spirit",
        opciones: ["F-117 Nighthawk", "B-2 Spirit", "B-1 Lancer", "Tu-160"],
        imagen: "imagenes/B-2-SPIRIT.jpg" // Ruta local
    },
    {
        descripcion: "Elevadores en la cola.",
        respuesta: "A400M Atlas",
        opciones: ["C-130 Hercules", "C-17 Globemaster III", "A400M Atlas", "C-5 Galaxy"],
        imagen: "imagenes/A400M-ATLAS.jpg" // Ruta local
    },
    {
        descripcion: "Pincho en la cola. 4 hélices.",
        respuesta: "P-3 Orion",
        opciones: ["E-3 Sentry", "C-130 Hercules", "P-3 Orion", "C-17 Globemaster III"],
        imagen: "imagenes/P-3-ORION.jpg" // Ruta local
    },
    {
        descripcion: "Paella.",
        respuesta: "E-3 Sentry",
        opciones: ["P-3 Orion", "C-130 Hercules", "E-3 Sentry", "A400M Atlas"],
        imagen: "imagenes/E-3-SENTRY.jpg" // Ruta local
    }
    // Añade más entradas aquí si tienes más imágenes descargadas
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
                    data-option="${op}"
                    onclick="checkAnswer(this)">
                ${op}
            </button>
        `;
    });

    // HTML generado con imagen local y fallback visual si falla
    quizElement.innerHTML = `
        <div class="text-center mb-6">
            <h3 class="text-xl font-semibold text-gray-800">Pregunta ${currentQuestion + 1} de ${preguntas.length}</h3>
            <p class="text-gray-600 mt-2"><strong>Descripción:</strong> ${q.descripcion}</p>
        </div>
        <div class="image-container text-center mb-6">
            <img src="${q.imagen}"
                 alt="Imagen de ${q.respuesta}"
                 class="mx-auto rounded-lg shadow-md cursor-pointer loaded"
                 onclick="abrirImagenEnPestaña('${q.imagen}')"
                 onerror="this.onerror=null; this.src='imagenes/imagen_no_disponible.jpg'; this.alt='Imagen no disponible'; this.classList.add('opacity-50');">
        </div>
        <div class="options">
            ${optionsHTML}
        </div>
    `;
}

// Función para manejar la respuesta seleccionada
function checkAnswer(buttonElement) {
    const selectedOption = buttonElement.getAttribute("data-option");
    const q = preguntas[currentQuestion];
    const isCorrect = selectedOption === q.respuesta;

    // Deshabilitar todos los botones después de responder
    const allButtons = document.querySelectorAll('.option-btn');
    allButtons.forEach(btn => {
        btn.disabled = true;
        const optionText = btn.getAttribute("data-option");
        if (optionText === q.respuesta) {
            // Marcar la respuesta correcta
            btn.classList.remove('bg-blue-100', 'hover:bg-blue-200');
            btn.classList.add('bg-green-100', 'text-green-800');
        } else if (optionText === selectedOption && !isCorrect) {
            // Marcar la respuesta incorrecta seleccionada
            btn.classList.remove('bg-blue-100', 'hover:bg-blue-200');
            btn.classList.add('bg-red-100', 'text-red-800');
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
    }, 1500);
}

// Función para abrir la imagen real en una nueva pestaña
function abrirImagenEnPestaña(url) {
    window.open(url, '_blank');
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



