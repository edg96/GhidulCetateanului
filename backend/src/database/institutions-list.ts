import { Institution } from '../common/interfaces/institution.interface';

export const institutionsList: Institution[] = [
  {
    name: 'Parlamentul României',
    category: 'constitutional_institutions',
    website:
      'Pentru informații oficiale, poți accesa: Senatul României - senat.ro și Camera Deputaților - cdep.ro. Alternativ, poți căuta pe Google folosind formulele: „Senatul României” și „Camera Deputaților”.',
    description:
      'Parlamentul României este instituția care reprezintă cetățenii și stabilește cadrul legal pentru funcționarea statului. Adoptă legi, controlează Guvernul și decide direcții majore de dezvoltare, influențând direct domenii precum economia, serviciile publice, drepturile și libertățile fiecărui individ.',
    address:
      'Strada Izvor nr. 2-4, Sector 5, București, România (Palatul Parlamentului)',
  },
  {
    name: 'Camera Deputaților',
    category: 'constitutional_institutions',
    website: 'https://www.cdep.ro/',
    description:
      'Camera Deputaților este una dintre camerele Parlamentului și analizează, dezbate și votează legi care vizează viața de zi cu zi a cetățenilor. Prin activitatea deputaților, sunt influențate politici publice privind educația, sănătatea, economia sau infrastructura, precum și modul în care Guvernul își îndeplinește atribuțiile.',
    address: 'Strada Izvor nr. 2-4, Sector 5, București, România',
  },
  {
    name: 'Senatul României',
    category: 'constitutional_institutions',
    website: 'https://www.senat.ro/',
    description:
      'Senatul este camera superioară a Parlamentului, având rol esențial în procesul legislativ și în echilibrul puterilor statului. Senatorii examinează și votează proiecte de lege cu impact asupra societății, contribuind la stabilitate, la protejarea intereselor publice și la funcționarea coerentă a instituțiilor statului.',
    address:
      'Calea 13 Septembrie nr. 1-3, Sector 5, București, 050711, România',
  },
  {
    name: 'Președintele României',
    category: 'constitutional_institutions',
    website: 'https://www.presidency.ro/ro/',
    description:
      'Președintele României garantează respectarea Constituției și reprezintă statul în plan intern și extern. Contribuie la stabilitatea politică, numește premierul, participă la politica externă și coordonează, împreună cu alte instituții, domeniul securității naționale, având un impact semnificativ asupra direcției generale a țării.',
    address:
      'Bulevardul Geniului nr. 1-3, Sector 6, București, 060116, România',
  },
  {
    name: 'Guvernul României',
    category: 'constitutional_institutions',
    website: 'https://www.gov.ro/',
    description:
      'Guvernul pune în aplicare legile și gestionează funcționarea de zi cu zi a statului, administrând domenii precum economia, sănătatea, educația, ordinea publică și infrastructura. Prin deciziile sale, influențează în mod direct nivelul de servicii publice, taxele, investițiile și bunăstarea cetățenilor.',
    address: 'Piața Victoriei nr. 1,Sector 1, București, 011791, România',
  },
  {
    name: 'Curtea Constituțională a României',
    category: 'constitutional_institutions',
    website: 'https://www.ccr.ro/',
    description:
      'Curtea Constituțională verifică dacă legile, ordonanțele și acțiunile instituțiilor respectă Constituția. Atunci când apar conflicte sau încălcări, CCR poate bloca sau corecta aceste decizii. Astfel, protejează drepturile cetățenilor și menține echilibrul democratic în funcționarea statului.',
    address: 'Calea 13 Septembrie nr. 2, Sector 5, București, 050725, România',
  },
  {
    name: 'Avocatul Poporului (Ombudsmanul)',
    category: 'constitutional_institutions',
    website: 'https://avp.ro/',
    description:
      'Avocatul Poporului apără cetățenii atunci când instituțiile statului le încalcă drepturile. Oricine se poate adresa gratuit acestei instituții, care poate investiga abuzuri, recomanda soluții și chiar sesiza Curtea Constituțională. Este un mecanism esențial de protecție împotriva tratamentelor nedrepte.',
    address: 'Strada George Vraca nr. 8, Sector 1, București, România',
  },
  {
    name: 'Consiliul Legislativ',
    category: 'constitutional_institutions',
    website: 'http://www.clr.ro/',
    description:
      'Consiliul Legislativ analizează și avizează toate proiectele de lege înainte de a ajunge în Parlament, pentru a asigura coerență, claritate și compatibilitate cu legislația existentă. Prin activitatea sa, contribuie la evitarea contradicțiilor legale și la adoptarea unor reglementări clare pentru cetățeni și instituții.',
    address:
      'Calea 13 Septembrie nr. 1-3, Sector 5, București, 050711, România',
  },
  {
    name: 'Curtea de Conturi a României',
    category: 'constitutional_institutions',
    website: 'https://www.curteadeconturi.ro/',
    description:
      'Curtea de Conturi controlează modul în care sunt gestionate fondurile publice, inclusiv banii europeni. Identifică nereguli, risipă sau abuzuri și recomandă măsuri pentru a proteja resursele statului. Activitatea sa garantează utilizarea corectă a banilor colectați din taxele plătite de cetățeni.',
    address: 'Strada Lev Tolstoi nr. 22-24, Sector 1, București, România',
  },
  {
    name: 'Consiliul Economic și Social',
    category: 'constitutional_institutions',
    website: 'https://www.ces.ro/',
    description:
      'Consiliul Economic și Social reunește reprezentanți ai angajaților, angajatorilor și societății civile, oferind opinii asupra politicilor publice. Instituția este consultată înaintea adoptării unor legi importante, asigurând că deciziile statului țin cont de impactul asupra oamenilor, economiei și mediului social.',
    address:
      'Strada Dr. Dimitrie D. Gerota nr. 7-9, Sector 2, București, 020027, România',
  },
  {
    name: 'Primul-Ministru',
    category: 'executive_branch',
    website:
      'https://www.gov.ro/ro/pagina/prim-ministru/echipa-prim-ministrului&page=1174',
    description:
      'Primul-Ministru conduce Guvernul și stabilește prioritățile de guvernare. El decide distribuirea bugetelor între ministere, coordonează implementarea programului de guvernare, aprobă politicile publice propuse de miniștri și reprezintă Guvernul în relația cu Parlamentul și instituțiile internaționale. Impactul său direct se vede în nivelul taxelor, investițiile publice, politicile sociale, salariale și proiectele naționale majore.',
    address: 'Piața Victoriei nr. 1, Sector 1, București, 011791, România',
  },
  {
    name: 'Cancelaria Prim-Ministrului',
    category: 'executive_branch',
    website: 'https://cancelarie.gov.ro/',
    description:
      'Cancelaria Prim-Ministrului oferă suport tehnic și logistic premierului. Analizează proiectele de acte normative, verifică impactul lor bugetar și administrativ, coordonează comunicarea guvernamentală și monitorizează îndeplinirea obiectivelor de către fiecare minister. Practic, Cancelaria este “centrul de comandă” care verifică dacă ministerele își fac treaba conform priorităților stabilite de Primul-Ministru.',
    address: 'Piața Victoriei nr. 1, Sector 1, București, 011791, România',
  },
  {
    name: 'Secretariatul General al Guvernului',
    category: 'executive_branch',
    website: 'https://sgg.gov.ro/1/',
    description:
      'SGG gestionează toate procedurile interne ale Guvernului: organizează ședințele, redactează și publică hotărârile, verifică legalitatea documentelor trimise de ministere și administrează instituțiile aflate în subordinea Guvernului. Asigură funcționarea administrativă a Executivului, similar unui “motor tehnic” al guvernării.',
    address: 'Piața Victoriei nr. 1, Sector 1, București, 011791, România',
  },
  {
    name: 'Consiliul Suprem de Apărare a Țării (CSAT)',
    category: 'executive_branch',
    website: 'https://csat.presidency.ro/',
    description:
      'CSAT aprobă strategiile de securitate națională, decide măsuri pentru combaterea terorismului, stabilește liniile de acțiune pentru armată, servicii de informații și ordine publică și gestionează situațiile de criză. El hotărăște inclusiv bugetele pentru apărare, operațiunile militare externe și răspunsurile la riscuri precum atacuri cibernetice sau dezastre majore.',
    address:
      'Bulevardul Geniului nr. 1-3, Sector 6, București, 060116, România',
  },
  {
    name: 'Consiliul Interministerial de Securitate',
    category: 'executive_branch',
    website:
      'https://sts.ro/ro/comitetul-interministerial-pentru-securitate-romania-ue-2019/',
    description:
      'Consiliul Interministerial de Securitate coordonează colaborarea între ministere privind domenii sensibile: protecția infrastructurilor critice (energie, apă, IT), securitatea cibernetică, măsuri de apărare civilă și pregătirea instituțiilor pentru evenimente cu risc ridicat. Este un mecanism prin care statul unifică acțiunile mai multor instituții într-o singură strategie.',
    address:
      'Splaiul Independenței nr. 323A, Sector 6, București, 060044, România',
  },
  {
    name: 'Consiliul Național pentru Combaterea Discriminării (CNCD)',
    category: 'executive_branch',
    website: 'https://www.cncd.ro/',
    description:
      'CNCD investighează cazurile de discriminare, audiază părțile implicate, sancționează comportamentele discriminatorii și emite decizii obligatorii pentru angajatori, instituții și persoane fizice. De asemenea, elaborează ghiduri de bune practici, instruiește instituțiile publice și intervine în situații privind hărțuire, discurs instigator sau tratament inegal.',
    address:
      'Piața Valter Mărăcineanu nr. 1-3, Sector 1, București, 010155, România',
  },
  {
    name: 'Consiliul Național al Audiovizualului (CNA)',
    category: 'executive_branch',
    website: 'https://www.cna.ro/',
    description:
      'CNA monitorizează posturile TV și radio, analizează sesizările publicului, sancționează încălcările (amenzi, somații publice, suspendări), aprobă licențe de emisie și reglementează publicitatea, protecția minorilor și echilibrul editorial. Este autoritatea care poate opri emisiuni, poate amenda televiziuni și poate controla conținutul audiovizual public.',
    address:
      'Bulevardul Libertății nr. 14, Sector 5, București, 050706, România',
  },
  {
    name: 'Ministerul Afacerilor Externe',
    category: 'ministries',
    website: 'https://www.mae.ro/',
    description:
      'MAE gestionează relațiile externe ale României: negociază tratate internaționale, protejează cetățenii români prin ambasade și consulate, organizează votul în străinătate, eliberează documente consulare și gestionează situațiile de criză din afara țării (evacuări, repatrieri, conflicte). Coordonează peste 150 de misiuni diplomatice în lume.',
    address: 'Aleea Alexandru nr. 31, Sector 1, București, 011822, România',
  },
  {
    name: 'Ministerul Afacerilor Interne',
    category: 'ministries',
    website: 'https://www.mai.gov.ro/',
    description:
      'MAI gestionează pașapoarte, buletine, permise auto, evidența populației, imigrația, ordinea publică, poliția rutieră, situațiile de urgență și frontierele. Coordonează Poliția, Jandarmeria, IGSU, Poliția de Frontieră și serviciile comunitare. Practic, este instituția cu care cetățeanul interacționează cel mai des în viața administrativă și în situații de siguranță.',
    address: 'Piața Revoluției nr. 1A, Sector 1, București, România',
  },
  {
    name: 'Ministerul Apărării Naționale',
    category: 'ministries',
    website: 'https://www.mapn.ro/',
    description:
      'MApN organizează armata, stabilește strategia militară, modernizează dotările, coordonează operațiuni militare interne și externe, gestionează pregătirea trupelor și administrează infrastructurile militare. Intervine în situații de criză, contribuie la apărarea NATO și gestionează carierele militarilor activi și în rezervă.',
    address: 'Strada Izvor nr. 110, Sector 5, București, 050564, România',
  },
  {
    name: 'Ministerul Justiției',
    category: 'ministries',
    website: 'https://www.just.ro/',
    description:
      'Ministerul Justiției elaborează legi în domeniul penal, civil și administrativ, administrează penitenciarele, supraveghează executarea pedepselor și asigură funcționarea instanțelor prin resurse logistice și bugetare. Gestionează profesiile juridice (notari, executori, avocați), avizează proiecte de lege privind justiția și monitorizează combaterea criminalității prin politici publice.',
    address: 'Strada Apolodor nr. 17, Sector 5, București, 050741, România',
  },
  {
    name: 'Ministerul Finanțelor',
    category: 'ministries',
    website: 'https://mfinante.gov.ro/ro/web/site',
    description:
      'Ministerul Finanțelor stabilește nivelul taxelor și impozitelor, administrează bugetul de stat, gestionează datoria publică și controlează cheltuielile instituțiilor publice. Coordonează ANAF, aprobă execuțiile bugetare, verifică modul în care primăriile și ministerele cheltuiesc banii și stabilește regulile fiscale pentru firme și cetățeni.',
    address:
      'Bulevardul Libertății nr. 16, Sector 5, București, 050706, România',
  },
  {
    name: 'Ministerul Economiei, Digitalizării, Antreprenoriatului și Turismului',
    category: 'ministries',
    website: 'https://economie.gov.ro/',
    description:
      'Ministerul Economiei administrează industria națională, emite licențe de funcționare în sectoare economice strategice, oferă programe de finanțare pentru IMM-uri, coordonează digitalizarea administrației și dezvoltă strategii pentru turism. Gestionează scheme de ajutor de stat, atrage investiții și monitorizează companiile cu capital de stat.',
    address: 'Calea Victoriei nr. 152, Sector 1, București, 010096, România',
  },
  {
    name: 'Ministerul Energiei',
    category: 'ministries',
    website: 'https://energie.gov.ro/',
    description:
      'Ministerul Energiei coordonează producția, transportul și distribuția electricității și gazelor, aprobă investițiile în centrale electrice, rețele de transport și proiecte de energie verde. Licențiază companiile energetice, supraveghează siguranța aprovizionării naționale și gestionează strategiile de tranziție energetică.',
    address: 'Strada Academiei nr. 39-41, Sector 1, București, 010013, România',
  },
  {
    name: 'Ministerul Agriculturii și Dezvoltării Rurale',
    category: 'ministries',
    website: 'https://www.madr.ro/',
    description:
      'Ministerul Agriculturii acordă subvenții fermierilor, gestionează programele europene pentru agricultură, reglementează producția alimentară, controlează siguranța alimentelor la producător și administrează irigațiile. Monitorizează piețele agricole, stabilește politicile de dezvoltare rurală și sprijină sectorul zootehnic și vegetal.',
    address: 'Bulevardul Carol I nr. 4, Sector 3, București, 030163, România',
  },
  {
    name: 'Ministerul Mediului, Apelor și Pădurilor',
    category: 'ministries',
    website: 'https://mmediu.ro/',
    description:
      'Ministerul Mediului emite autorizații de mediu, controlează calitatea aerului și a apei, gestionează pădurile statului prin Romsilva, coordonează programe de reciclare, aprobă exploatări forestiere, monitorizează schimbările climatice și administrează ariile naturale protejate. Intervine în cazuri de poluare și reglementează activitățile cu impact ecologic.',
    address: 'Bulevardul Libertății nr. 12, Sector 5, București, România',
  },
  {
    name: 'Ministerul Muncii, Familiei, Tineretului și Solidarității Sociale',
    category: 'ministries',
    website: 'https://www.mmuncii.ro/',
    description:
      'Ministerul Muncii stabilește salariul minim, gestionează pensiile și ajutoarele sociale, administrează legislația muncii, controlează angajatorii prin ITM și coordonează politicile pentru familie și tineret. Gestionează sistemul de asistență socială, alocațiile pentru copii, indemnizațiile de creștere și protecția persoanelor vulnerabile.',
    address:
      'Strada Dem I. Dobrescu nr. 2-4, Sector 1, București, 010026, România',
  },
  {
    name: 'Ministerul Sănătății',
    category: 'ministries',
    website: 'https://www.ms.ro/ro/',
    description:
      'Ministerul Sănătății administrează spitalele publice, stabilește politicile medicale, autorizează medicamentele prin ANMDM, gestionează programele naționale de sănătate (vaccinări, screening, boli cronice), fixează standardele medicale și coordonează răspunsul în situații epidemiologice și de urgență sanitară.',
    address:
      'Strada Cristian Popișteanu nr. 1-3, Sector 1, București, 010024, România',
  },
  {
    name: 'Ministerul Educației și Cercetării',
    category: 'ministries',
    website: 'https://www.edu.ro/',
    description:
      'Ministerul Educației stabilește programele școlare, administrează examenele naționale (Evaluare Națională, Bacalaureat), acreditarea școlilor și universităților, formarea profesorilor și finanțarea unităților de învățământ. Supervizează cercetarea, distribuie fonduri pentru proiecte științifice și gestionează infrastructura educațională.',
    address:
      'Strada General Berthelot nr. 28-30, Sector 1, București, 010168, România',
  },
  {
    name: 'Autoritatea Națională pentru Cercetare',
    category: 'ministries',
    website: 'https://www.research.gov.ro/',
    description:
      'Autoritatea Națională pentru Cercetare finanțează institutele de cercetare, gestionează fonduri europene și naționale pentru proiecte științifice, acredită laboratoare, evaluează performanța instituțiilor de cercetare și coordonează programele de inovare și digitalizare la nivel național.',
    address: 'Strada Mendeleev nr. 21-25, Sector 1, București, 010362, România',
  },
  {
    name: 'Ministerul Culturii',
    category: 'ministries',
    website: 'https://www.cultura.ro/',
    description:
      'Ministerul Culturii aprobă restaurarea monumentelor istorice, finanțează teatre, muzee și filarmonici, susține proiecte artistice, protejează patrimoniul național și eliberează avize pentru filmări, expoziții și activități culturale. Coordonează instituțiile de creație și reglementează industria editorială, cinematografică și evenimentele culturale.',
    address: 'Bulevardul Unirii nr. 22, Sector 3, București, 030833, România',
  },
  {
    name: 'Ministerul Dezvoltării, Lucrărilor Publice și Administrației',
    category: 'ministries',
    website: 'https://www.mdlpa.ro/',
    description:
      'MDLPA finanțează dezvoltarea locală, reabilitarea blocurilor, construcția de drumuri, școli și rețele de apă-canal. Coordonează administrația publică locală, stabilește standardele pentru urbanism și arhitectură, aprobă planuri urbanistice și gestionează programe precum PNDL și planurile de regenerare urbană.',
    address: 'Strada Apolodor nr. 17, Sector 5, București, România',
  },
  {
    name: 'Ministerul Transporturilor și Infrastructurii',
    category: 'ministries',
    website: 'https://www.mt.ro/',
    description:
      'Ministerul Transporturilor construiește și modernizează autostrăzi, căi ferate, porturi și aeroporturi. Licențiază operatorii de transport rutier, feroviar, naval și aerian, reglementează siguranța rutieră și administrarea infrastructurii critice. Supraveghează companii precum CFR, Tarom, Metrorex și CNAIR.',
    address:
      'Bulevardul Dinicu Golescu nr. 38 Sector 1, București, 010873 România',
  },
  {
    name: 'Agenția Națională pentru Sport',
    category: 'ministries',
    website: 'https://sport.gov.ro/',
    description:
      'Agenția Națională pentru Sport finanțează federațiile sportive, administrează bazele sportive, susține programe pentru tineret și sportul școlar, alocă fonduri pentru sportivii de performanță și supraveghează participarea României la competiții internaționale. Emite licențe și autorizații pentru cluburi și antrenori.',
    address: 'Strada Vasile Conta nr. 16 Sector 2, București România',
  },
  {
    name: 'Ministerul Investițiilor și Proiectelor Europene',
    category: 'ministries',
    website: 'https://mfe.gov.ro/',
    description:
      'MIPE gestionează fondurile europene, aprobă proiectele depuse de primării, companii și ONG-uri, monitorizează implementarea investițiilor și asigură corecta utilizare a banilor europeni. Coordonează PNRR, programele operaționale și alocările bugetare din fondurile structurale și de coeziune.',
    address:
      'Șoseaua București-Ploiești nr. 1-1B, Victoria Office, Intrarea Strada Menuetului nr. 7 Sector 1, București România',
  },
  {
    name: 'Ministerul Familiei, Tineretului și Egalității de Șanse',
    category: 'ministries',
    website: 'https://mfamilie.gov.ro/1/',
    description:
      'Ministerul Familiei acordă sprijin financiar pentru familii, gestionează centrele pentru minori și victime ale violenței domestice, finanțează proiecte pentru tineri, monitorizează adopțiile și promovează egalitatea de șanse. Coordonează direcțiile județene de protecție socială și programele pentru incluziune.',
    address:
      'Piața Montreal nr. 10, etaj 3, intrările E, F și B4 Sector 1, București România',
  },
  {
    name: 'Autoritatea Electorală Permanentă (AEP)',
    category: 'independent_authorities_and_agencies',
    website: 'https://www.roaep.ro/prezentare/',
    description:
      'AEP administrează Registrul Electoral, verifică finanțarea partidelor politice, controlează cheltuielile din campanii, instruiește birourile electorale și supraveghează organizarea alegerilor. Emite decizii obligatorii pentru primării și partide și publică rapoarte privind corectitudinea proceselor electorale.',
    address: 'Strada Stavropoleos nr. 6 Sector 3, București, 030084 România',
  },
  {
    name: 'Autoritatea Națională pentru Protecția Consumatorilor (ANPC)',
    category: 'independent_authorities_and_agencies',
    website: 'https://anpc.ro/',
    description:
      'ANPC controlează magazine, service-uri, restaurante, bănci și platforme online pentru a verifica respectarea drepturilor consumatorilor. Poate dispune amenzi, închideri temporare, retrageri de produse periculoase și sesizări către procuratură. Gestionează reclamațiile cetățenilor și verifică practicile comerciale incorecte.',
    address: 'Bulevardul Aviatorilor nr. 72 Sector 1, București România',
  },
  {
    name: 'Autoritatea Națională pentru Administrare și Reglementare în Comunicații (ANCOM)',
    category: 'independent_authorities_and_agencies',
    website: 'https://www.ancom.ro/',
    description:
      'ANCOM licențiază operatorii de telefonie și internet, controlează calitatea serviciilor telecom, atribuie frecvențe radio, implementează portabilitatea numerelor și sancționează companiile care nu respectă reglementările. Supraveghează prețurile, acoperirea rețelelor și protecția utilizatorilor.',
    address: 'Strada Delea Nouă nr. 2 Sector 3, București, 030925 România',
  },
  {
    name: 'Autoritatea Națională pentru Administrarea și Reglementarea Energiei (ANRE)',
    category: 'independent_authorities_and_agencies',
    website: 'https://anre.ro/',
    description:
      'ANRE stabilește tarifele la energie și gaze, eliberează licențe pentru furnizori, verifică facturarea, controlează operatorii de distribuție și sancționează abuzurile din piața energetică. Supraveghează modul în care companiile furnizează energie consumatorilor și monitorizează investițiile din sistem.',
    address: 'Strada Constantin Nacu nr. 3 Sector 2, București, 030167 România',
  },
  {
    name: 'Consiliul Concurenței',
    category: 'independent_authorities_and_agencies',
    website: 'https://www.consiliulconcurentei.ro/',
    description:
      'Consiliul Concurenței investighează înțelegeri ilegale între firme, controlează posibile carteluri, analizează fuziuni și achiziții mari, stabilește dacă apar abuzuri de poziție dominantă și poate aplica amenzi de milioane de euro companiilor. Intervine în piețe precum energie, retail, telecom, transport sau farmaceutice pentru a menține prețuri corecte pentru consumatori.',
    address:
      'Piața Presei Libere nr. 1, corp D1 Sector 1, București, 013701 România',
  },
  {
    name: 'Agenția Națională de Integritate (ANI)',
    category: 'independent_authorities_and_agencies',
    website: 'https://integritate.eu/',
    description:
      'ANI verifică averile și interesele funcționarilor publici, analizează incompatibilități, investighează conflicte de interese, solicită confiscarea averilor nejustificate și sesizează parchetele atunci când descoperă infracțiuni. Publică declarațiile de avere, face controale în instituții și emite rapoarte obligatorii pentru demnitari.',
    address:
      'Bulevardul Lascăr Catargiu nr. 15 Sector 1, București, 010661 România',
  },
  {
    name: 'Agenția Națională de Administrare Fiscală (ANAF)',
    category: 'independent_authorities_and_agencies',
    website: 'https://www.anaf.ro/',
    description:
      'ANAF colectează taxele și impozitele, efectuează controale fiscale la firme și persoane fizice, gestionează rambursările de TVA, executările silite, blocările de conturi și cazurile de evaziune fiscală. Administrează ghișeul.ro, SPV, declarațiile fiscale, controalele antifraudă și relația directă cu contribuabilii.',
    address: 'Strada Apolodor nr. 17 Sector 5, București, 050741 România',
  },
  {
    name: 'Agenția Națională pentru Achiziții Publice (ANAP)',
    category: 'independent_authorities_and_agencies',
    website: 'https://anap.gov.ro/web/',
    description:
      'ANAP stabilește regulile pentru achizițiile făcute de primării, ministere și companii de stat, verifică licitațiile înainte de atribuire, controlează modul de cheltuire a banilor publici și poate anula proceduri neregulamentare. Instruieste autoritățile, analizează contestațiile și previne fraudele în achiziții publice.',
    address: 'Strada Foișorului nr. 2 Sector 3, București, 031178 România',
  },
  {
    name: 'Agenția Națională pentru Ocuparea Forței de Muncă (ANOFM)',
    category: 'independent_authorities_and_agencies',
    website: 'https://www.anofm.ro/',
    description:
      'ANOFM intermediază angajarea între șomeri și angajatori, oferă cursuri gratuite de formare profesională, administrează indemnizațiile de șomaj, gestionează subvenții pentru angajarea anumitor categorii și monitorizează piața muncii. Organizează burse de joburi și sprijină integrarea persoanelor în căutarea unui loc de muncă.',
    address: 'Strada Avalanșei nr. 20-22 Sector 4, București, 040305 România',
  },
  {
    name: 'Agenția Națională pentru Egalitatea de Șanse între Femei și Bărbați (ANES)',
    category: 'independent_authorities_and_agencies',
    website: 'https://anes.gov.ro/',
    description:
      'ANES monitorizează cazurile de violență domestică, coordonează adăposturile pentru victime, oferă programe de consiliere, elaborează politici pentru egalitatea de gen și controlează instituțiile care nu respectă legislația antidiscriminare. Derulează campanii de prevenție și instruiește autorități locale.',
    address: 'Intrarea Camil Petrescu nr. 5 Sector 1, București România',
  },
  {
    name: 'Agenția Națională pentru Protecția Mediului (ANPM)',
    category: 'independent_authorities_and_agencies',
    website: 'https://raportare.anpm.ro/',
    description:
      'ANPM monitorizează calitatea aerului, apei și solului, emite avize și autorizații de mediu, gestionează raportările companiilor poluatoare, administrează hărțile de poluare și elaborează rapoarte naționale privind starea mediului. Controlează proiectele cu impact ecologic și poate impune măsuri de remediere.',
    address: 'Splaiul Independenței nr. 294 Sector 6, București România',
  },
  {
    name: 'Agenția Națională pentru Arii Naturale Protejate (ANANP)',
    category: 'independent_authorities_and_agencies',
    website: 'https://ananp.gov.ro/',
    description:
      'ANANP administrează parcurile naționale, rezervațiile naturale și siturile Natura 2000. Reglementează accesul în aceste zone, emite avize pentru activități economice, controlează tăierile ilegale, protejează speciile rare și coordonează rangerii care supraveghează terenurile protejate.',
    address:
      'Piața Valter Mărăcineanu nr. 1-3 Sector 1, București, 010155 România',
  },
  {
    name: 'Agenția Națională Antidrog (ANA)',
    category: 'independent_authorities_and_agencies',
    website: 'Indisponibil',
    description:
      'ANA desfășoară campanii de prevenire a consumului de droguri în școli și comunități, oferă consiliere și tratament în centre specializate, coordonează intervențiile antidrog, colectează date despre traficul și consumul de substanțe și colaborează cu poliția în operațiuni împotriva rețelelor de distribuție.',
    address:
      'Pentru identificarea sediului: caută „Agenția Națională Antidrog + județ”.',
  },
  {
    name: 'Agenția Națională pentru Persoanele cu Dizabilități',
    category: 'independent_authorities_and_agencies',
    website: 'https://anpd.gov.ro/web/',
    description:
      'ANPD verifică centrele pentru persoane cu dizabilități, eliberează certificate de încadrare în grad de handicap, controlează serviciile sociale, coordonează politicile de accesibilizare și monitorizează respectarea drepturilor persoanelor cu dizabilități. Oferă ghiduri, asistență și finanțări pentru integrare.',
    address:
      'Strada Constantin Budișteanu nr. 28C, etaj 1 Sector 1, București, 010773 România',
  },
  {
    name: 'Agenția Națională pentru Resurse Minerale (ANRM)',
    category: 'independent_authorities_and_agencies',
    website: 'https://www.namr.ro/home/',
    description:
      'ANRM administrează resursele minerale ale României (petrol, gaze, minereuri), acordă licențe de explorare și exploatare companiilor, controlează producția raportată, stabilește redevențele datorate statului și verifică siguranța exploatărilor. Publică hărți geologice și monitorizează zonele cu potențial energetic.',
    address: 'Bulevardul Dacia nr. 59 Sector 1, București, 010407 România',
  },
  {
    name: 'Agenția Națională pentru Locuințe (ANL)',
    category: 'independent_authorities_and_agencies',
    website: 'https://www.anl.ro/',
    description:
      'ANL construiește locuințe pentru tineri, specialiști și familii cu venituri reduse, administrează programe de închiriere cu chirii subvenționate, se ocupă de vânzarea locuințelor ANL și colaborează cu primăriile pentru repartizarea acestora. Gestionează fonduri, licitații și lucrări de construcție.',
    address:
      'Bulevardul Unirii nr. 61, Bloc F3 Sector 3, București, 030828 România',
  },
  {
    name: 'Agenția Națională pentru Romi',
    category: 'independent_authorities_and_agencies',
    website: 'http://www.anr.gov.ro/',
    description:
      'Agenția Națională pentru Romi coordonează programe de incluziune, sprijină accesul la educație, sănătate și locuri de muncă pentru comunitățile de romi, derulează proiecte europene, monitorizează discriminarea și colaborează cu primăriile pentru reducerea excluziunii sociale.',
    address:
      'Splaiul Independenței nr. 202A, etaj 8 Sector 6, București România',
  },
  {
    name: 'Agenția Națională pentru Achiziții Publice',
    category: 'independent_authorities_and_agencies',
    website: 'https://anap.gov.ro/web/',
    description:
      'ANAP stabilește regulile pentru achizițiile publice, verifică documentațiile primăriilor și ministerelor înainte de licitare, analizează contestațiile, controlează contractele atribuite și oferă instruire funcționarilor. Previne fraudele și se asigură că banii publici sunt cheltuiți legal și eficient.',
    address: 'Strada Foișorului nr. 2 Sector 3, București, 031178 România',
  },
  {
    name: 'Institutul Național de Statistică (INS)',
    category: 'independent_authorities_and_agencies',
    website: 'https://insse.ro/cms/',
    description:
      'INS colectează date despre populație, salarii, prețuri, economie, agricultură și educație, realizează recensăminte, publică statistici oficiale, analize și prognoze. Instituțiile statului folosesc aceste informații pentru politici publice, iar mediul privat pentru decizii economice fundamentate.',
    address:
      'Pentru sediul local: caută „INS + județ” (ex.: INS Cluj, INS Iași).',
  },
  {
    name: 'Institutul Cultural Român (ICR)',
    category: 'independent_authorities_and_agencies',
    website: 'https://www.icr.ro/',
    description:
      'ICR promovează cultura românească în străinătate prin expoziții, festivaluri, filme, traduceri de literatură, conferințe și burse pentru artiști. Administrează institute culturale în marile capitale ale lumii și organizează evenimente prin care România este reprezentată la nivel internațional.',
    address: 'Aleea Alexandru nr. 38 Sector 1, București, 011824 România',
  },
  {
    name: 'Institutul Diplomatic Român (IDR)',
    category: 'independent_authorities_and_agencies',
    website: 'https://www.idr.ro/',
    description:
      'IDR pregătește diplomați și funcționari publici prin cursuri, simulări, analize geopolitice și programe de formare. Oferă expertiză ministerelor pentru negocierea tratatelor, organizează conferințe internaționale și elaborează studii asupra securității și relațiilor externe.',
    address: 'Bulevardul Primăverii nr. 17 Sector 1, București, 011972 România',
  },
  {
    name: 'Serviciul Român de Informații (SRI)',
    category: 'security_and_defense_institutions',
    website: 'https://www.sri.ro/',
    description:
      'SRI identifică și previne amenințări la adresa securității naționale: terorism, spionaj, atacuri cibernetice, extremism, sabotaj, criminalitate organizată și corupție la nivel înalt. Interceptează comunicații pe mandat, protejează infrastructuri critice și colaborează cu parteneri NATO pentru operațiuni de intelligence.',
    address: 'Bulevardul Libertății nr. 14 Sector 5, București, 030167 România',
  },
  {
    name: 'Serviciul de Informații Externe (SIE)',
    category: 'security_and_defense_institutions',
    website: 'https://www.sie.ro/',
    description:
      'SIE culege informații din străinătate privind riscuri militare, economice sau diplomatice, sprijină negocierile externe, desfășoară operațiuni sub acoperire, monitorizează activități ostile României și furnizează rapoarte strategice Președintelui și CSAT. Gestionează informatori, analize și operațiuni externe.',
    address:
      'Șoseaua București-Ploiești nr. 280-282 Sector 1, București România',
  },
  {
    name: 'Serviciul de Protecție și Pază (SPP)',
    category: 'security_and_defense_institutions',
    website: 'https://www.spp.ro/',
    description:
      'SPP asigură protecția Președintelui, premierului, miniștrilor, delegațiilor oficiale străine și altor persoane cu risc ridicat. Gestionează escorta oficială, protecția sediilor importante, analiza amenințărilor și intervenția în situații critice. Asigură securitatea evenimentelor de nivel înalt.',
    address: 'Bulevardul Geniului nr. 42B Sector 6, București, 060117 România',
  },
  {
    name: 'Serviciul de Telecomunicații Speciale (STS)',
    category: 'security_and_defense_institutions',
    website: 'https://sts.ro/ro/',
    description:
      'STS administrează sistemul național 112, asigură comunicațiile criptate pentru instituțiile statului, coordonează infrastructura informatică pentru alegeri, emite certificate digitale, operează rețele de comunicații securizate și gestionează centrele IT critice. Intervine pentru remedierea atacurilor cibernetice și protejează datele sensibile ale instituțiilor.',
    address:
      'Splaiul Independenței nr. 323A Sector 6, București, 060044 România',
  },
  {
    name: 'Ministerul Apărării Naționale',
    category: 'security_and_defense_institutions',
    website: 'https://www.mapn.ro/',
    description:
      'MApN organizează și dotează armata, desfășoară ample exerciții militare, administrează baze și poligoane, achiziționează echipament militar, participă la misiuni NATO, coordonează apărarea aeriană și pregătirea rezerviștilor. Intervine în situații de criză (inundații, dezastre) și gestionează structurile medicale militare.',
    address: 'Strada Izvor nr. 110 Sector 5, București, 050564 România',
  },
  {
    name: 'Ministerul Afacerilor Interne',
    category: 'security_and_defense_institutions',
    website: 'https://www.mai.gov.ro/',
    description:
      'MAI emite pașapoarte, buletine și permise auto, gestionează evidența populației, controlează frontierele, coordonează Poliția, Jandarmeria, Poliția Rutieră și IGSU, intervine la incendii, accidente și situații de urgență. Asigură ordinea publică, controlează imigrația și administrează sistemele de siguranță națională.',
    address: 'Piața Revoluției nr. 1A Sector 1, București România',
  },
  {
    name: 'Jandarmeria Română',
    category: 'security_and_defense_institutions',
    website: 'https://www.jandarmeriaromana.ro/',
    description:
      'Jandarmeria asigură ordinea la proteste, meciuri și evenimente mari, intervine în zone montane prin jandarmii salvamont, execută misiuni antiteroriste, escortează transporturi speciale și controlează zonele publice în situații de risc. Cooperează cu poliția în menținerea siguranței comunităților.',
    address: 'Strada Jandarmeriei nr. 9-11 Sector 1, București, 013894 România',
  },
  {
    name: 'Poliția Română',
    category: 'security_and_defense_institutions',
    website: 'https://politiaromana.ro/',
    description:
      'Poliția investighează infracțiuni, efectuează percheziții, aplică sancțiuni rutiere, supraveghează circulația, gestionează cazuri de violență domestică, caută persoane dispărute, emite cazierul judiciar și intervine în urgențe. Controlează aplicarea legii în comunități prin secții, posturi și brigăzi specializate.',
    address: 'Strada Mihai Vodă nr. 6 Sector 5, București România',
  },
  {
    name: 'Inspectoratul General pentru Situații de Urgență (IGSU)',
    category: 'security_and_defense_institutions',
    website: 'https://igsu.ro/',
    description:
      'IGSU intervine la incendii, accidente, inundații, cutremure, derapaje rutiere, explozii și situații cu substanțe periculoase. Coordonează SMURD, gestionează sirenele de avertizare, instruiește populația, verifică siguranța clădirilor și asigură răspunsul rapid la situații majore de risc.',
    address: 'Bulevardul Dimitrie Pompeiu nr. 10A Sector 2, București România',
  },
  {
    name: 'Inspectoratul General pentru Imigrări',
    category: 'security_and_defense_institutions',
    website: 'https://igi.mai.gov.ro/',
    description:
      'IGI emite permise de ședere, aprobă vize, gestionează cererile de azil, controlează angajarea străinilor, verifică legalitatea șederii în România și administrează centrele pentru solicitanții de protecție internațională. Cooperează cu Poliția de Frontieră și intervine în fluxurile migratorii.',
    address:
      'Strada Lt. Col. Constantin Marinescu nr. 15A Sector 5, București România',
  },
  {
    name: 'Înalta Curte de Casație și Justiție (ÎCCJ)',
    category: 'judiciary_and_oversight',
    website: 'https://www.iccj.ro/',
    description:
      'ÎCCJ judecă dosarele în care sunt implicați miniștri, parlamentari sau magistrați, soluționează recursuri în interesul legii, unifică interpretarea legislației, analizează contestații în anulare și revizuiri și poate confirma sau infirma hotărâri ale instanțelor inferioare. Este ultima instanță în sistemul judiciar.',
    address:
      'Bulevardul Octavian Goga nr. 2, tronson I, Sector 3, București, 030982',
  },
  {
    name: 'Ministerul Justiției',
    category: 'judiciary_and_oversight',
    website: 'https://www.just.ro/',
    description:
      'Ministerul Justiției conduce penitenciarele, elaborează codurile penale și civile, supraveghează executarea pedepselor, autorizează notarii și executorii, administrează bugetele instanțelor și parchetelor și coordonează informatic sistemul judiciar. Propune reforme în domeniul justiției și controlează închisori și probațiune.',
    address: 'Strada Apolodor nr. 17, Sector 5, București',
  },
  {
    name: 'Consiliul Superior al Magistraturii (CSM)',
    category: 'judiciary_and_oversight',
    website: 'https://www.csm1909.ro/',
    description:
      'CSM numește, promovează și evaluează judecătorii și procurorii, investighează abaterile disciplinare, decide sancțiuni împotriva magistraților, avizează legile din domeniul justiției și apără independența instanțelor. Gestionează concursuri, examene și mobilitatea în sistemul judiciar.',
    address: 'Calea Plevnei nr. 141B, Sector 6, București',
  },
  {
    name: 'Parchetul General / Ministerul Public',
    category: 'judiciary_and_oversight',
    website: 'https://www.mpublic.ro/',
    description:
      'Parchetul General coordonează toate parchetele din România, conduce urmărirea penală în dosare complexe, stabilește politici de investigare, confirmă rechizitorii importante și supraveghează activitatea procurorilor. Poate prelua cazuri din teritoriu, sesiza instanțe superioare, analiza probe și coordona investigații privind criminalitatea gravă.',
    address: 'Bulevardul Libertății nr. 14, Sector 5, București',
  },
  {
    name: 'Direcția Națională Anticorupție (DNA)',
    category: 'judiciary_and_oversight',
    website: 'https://www.dna.ro/',
    description:
      'DNA investighează corupția la nivel înalt: miniștri, parlamentari, primari, funcționari, șefi de instituții, magistrați și directori de companii de stat. Efectuează percheziții, audieri, ridicări de documente, pune sechestru pe bunuri, colaborează cu serviciile de informații și trimite în judecată persoane acuzate de fraudarea banilor publici.',
    address: 'Strada Știrbei Vodă nr. 79-81, Sector 1, București, 010106',
  },
  {
    name: 'Direcția de Investigare a Infracțiunilor de Criminalitate Organizată și Terorism (DIICOT)',
    category: 'judiciary_and_oversight',
    website: 'https://www.diicot.ro/',
    description:
      'DIICOT investighează rețele de criminalitate organizată: trafic de droguri, trafic de persoane, criminalitate informatică, spălare de bani, terorism și fraude transfrontaliere. Coordonă operațiuni cu poliția, efectuează filaje, infiltrați, interceptări pe mandat și destructurează grupări cu activitate internațională.',
    address: 'Strada Sfânta Vineri nr. 33, Sector 3, București, 030203',
  },
  {
    name: 'Curțile de Apel',
    category: 'judiciary_and_oversight',
    website: 'Caută „Curtea de Apel + orașul” (ex.: Curtea de Apel București).',
    description:
      'Curțile de Apel judecă apeluri împotriva hotărârilor pronunțate de tribunale, reanalizează probe, audiază martori și pot schimba sau anula decizii anterioare. Gestionează dosare penale și civile cu miză ridicată și confirmă sau infirmă hotărâri importante pentru cetățeni, firme și autorități.',
    address: 'Pentru sediul local caută: „Curtea de Apel + orașul”.',
  },
  {
    name: 'Tribunalele',
    category: 'judiciary_and_oversight',
    website: 'Caută „Tribunal + județ” (ex.: Tribunalul Cluj).',
    description:
      'Tribunalele judecă cazuri civile, penale, comerciale și de contencios administrativ. Analizează conflicte de muncă, litigii cu instituții publice, divorțuri complexe, dosare economice și fapte penale grave. Au rol de instanță intermediară și verifică deciziile judecătoriilor.',
    address: 'Pentru sediul local caută: „Tribunal + județul/localitatea”.',
  },
  {
    name: 'Judecătoriile',
    category: 'judiciary_and_oversight',
    website: 'Caută „Judecătoria + orașul” (ex.: Judecătoria Iași).',
    description:
      'Judecătoriile soluționează dosarele cel mai des întâlnite de cetățeni: contravenții, litigii de proprietate, dosare de violență domestică, divorțuri simple, furturi, accidente rutiere, ordonanțe președințiale și executări silite. Sunt primul nivel al sistemului judiciar și emit majoritatea hotărârilor din instanțe.',
    address: 'Pentru sediul exact caută: „Judecătoria + orașul”.',
  },
  {
    name: 'Biroul Electoral Central (BEC)',
    category: 'election_and_democracy_institutions',
    website: 'https://prezidentiale2025.bec.ro/',
    description:
      'BEC organizează și coordonează alegerile la nivel național, stabilește procedurile de vot, validează candidaturile, distribuie buletinele de vot, centralizează rezultatele și soluționează contestațiile. Publică procese-verbale, supraveghează secțiile și se asigură că votul este corect numărat.',
    address: 'Strada Eugeniu Carada nr. 1, Sector 3, București (Intrarea B)',
  },
  {
    name: 'Autoritatea Electorală Permanentă (AEP)',
    category: 'election_and_democracy_institutions',
    website: 'https://www.roaep.ro/prezentare/',
    description:
      'AEP administrează Registrul Electoral, verifică finanțarea partidelor și a campaniilor, instruiește membrii secțiilor de vot, verifică listele electorale, monitorizează alegerile locale și parlamentare și poate sancționa nereguli electorale. Gestionează și platformele informatice de alegeri.',
    address: 'Pentru sediu: caută „AEP + județ”.',
  },
  {
    name: 'Oficiul Național al Registrului Comerțului (ONRC)',
    category: 'election_and_democracy_institutions',
    website: 'https://www.onrc.ro/index.php/ro/',
    description:
      'ONRC înregistrează firme, fundații, partide și alte entități juridice, verifică actele de constituire, emite certificate constatatoare, înregistrează modificări de sedii, administratori, obiecte de activitate și oferă acces public la istoricul unei companii. Gestionează registrul beneficiarilor reali și arhivează documentele comerciale.',
    address: 'Bulevardul Unirii nr. 74, Bloc J3B, Sector 3, București, 030837',
  },
];
