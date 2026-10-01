document.addEventListener('DOMContentLoaded', () => {
  const selectRegion = document.getElementById('select-region');
  const selectCirugia = document.getElementById('select-cirugia');
  const checklistContainer = document.getElementById('checklist-container');
  const itemsList = document.getElementById('items-list');
  const testsList = document.getElementById('tests-list');
  const romContainer = document.getElementById('rom-container');
  const danielsContainer = document.getElementById('daniels-container');

  const db = [
    // ==========================================
    // --- COLUMNA VERTEBRAL ---
    // ==========================================
    {
      "id": "microdiscectomia_lumbar_fase1",
      "region": "columna",
      "nombre": "Microdiscectomía Lumbar L4-L5/L5-S1 (Fase I: Semanas 0 - 4)",
      "rom": [
        { "movimiento": "Flexión lumbar activa", "fisiologico": "0° - 60°", "objetivo_fase": "Protección estricta (0° - 20° evita flexión lumbar extrema)" },
        { "movimiento": "Extensión lumbar activa", "fisiologico": "0° - 25°", "objetivo_fase": "10° - 15° (Posición neutra lordótica)" }
      ],
      "musculos_daniels": [
        { "musculo": "Transverso del Abdomen / Core Profundo (Músculo Diana)", "minimo_esperado": "3/5 (Activación isométrica guiada)" },
        { "musculo": "Tibial Anterior - Raíz L4 (Músculo Diana)", "minimo_esperado": "3/5" },
        { "musculo": "Extensor Largo del Hálux - Raíz L5 (Músculo Diana)", "minimo_esperado": "3/5" },
        { "musculo": "Gastrocnemios / Sóleo - Raíz S1 (Músculo Diana)", "minimo_esperado": "3-4/5" }
      ],
      "items": [
        {
          "id": "marcha_talon_punta",
          "criterio": "Capacidad de realizar marcha sobre talones (L5) y de puntillas (S1) sin claudicación",
          "causas_no_cumplimiento": [
            "Paresia o radiculopatía residual por compresión nerviosa prolongada previa.",
            "Edema/inflamación en la raíz nerviosa perirradicular.",
            "Espasmo defensivo de la musculatura paravertebral e isquiotibial."
          ]
        },
        {
          "id": "ausencia_centralizacion_dolor",
          "criterio": "Ausencia de radiculalgia distal por debajo de la rodilla en AVD básica",
          "causas_no_cumplimiento": [
            "Atrapamiento o fibrosis epidural postquirúrgica (adherencias durales).",
            "Recidiva discal precoz por esfuerzo flexor no controlado.",
            "Inestabilidad segmentaria no fijada."
          ]
        }
      ],
      "tests": [
        {
          "id": "test_lasegue",
          "nombre": "Test de Lasègue (Elevación de Pierna Recta - SLR)",
          "descripcion": "Valoración de irritación dural L4-S1. Positivo si reproduce dolor radicular < 60°."
        },
        {
          "id": "test_bragard",
          "nombre": "Test de Bragard",
          "descripcion": "Sensibilización con dorsiflexión pasiva del tobillo sobre el punto de dolor del Lasègue."
        }
      ]
    },
    {
      "id": "microdiscectomia_lumbar_fase2",
      "region": "columna",
      "nombre": "Microdiscectomía Lumbar L4-L5/L5-S1 (Fase II: Semanas 4 - 12)",
      "rom": [
        { "movimiento": "Flexión lumbar activa", "fisiologico": "0° - 60°", "objetivo_fase": "40° - 50° (Integrando báscula pélvica)" },
        { "movimiento": "Inclinación lateral lumbar", "fisiologico": "0° - 25°", "objetivo_fase": "15° - 20° sin dolor" }
      ],
      "musculos_daniels": [
        { "musculo": "Extensores Lumbares / Multífidos (Músculo Diana)", "minimo_esperado": "4/5" },
        { "musculo": "Glúteo Mayor y Glúteo Medio (Músculo Diana)", "minimo_esperado": "4/5" },
        { "musculo": "Oblicuos Interno/Externo (Músculo Diana)", "minimo_esperado": "4/5" }
      ],
      "items": [
        {
          "id": "tolerancia_sedestacion",
          "criterio": "Tolerancia a la sedestación continuada de 45-60 minutos con buen control postural",
          "causas_no_cumplimiento": [
            "Fatiga o debilidad de la musculatura estabilizadora del core.",
            "Sobrecarga de las articulaciones facetarias lumbares por rectificación."
          ]
        }
      ],
      "tests": [
        {
          "id": "test_slump",
          "nombre": "Test de Slump",
          "descripcion": "Tensión neurodinámica completa del eje neuraxial. Evalúa mecanosensibilidad neural residual."
        }
      ]
    },

    // ==========================================
    // --- MIEMBRO SUPERIOR ---
    // ==========================================
    {
      "id": "manguito_rotador_fase1",
      "region": "miembro_superior",
      "nombre": "Reparación de Manguito Rotador (Fase I: Semanas 0 - 6)",
      "rom": [
        { "movimiento": "Flexión anterior pasiva", "fisiologico": "0° - 180°", "objetivo_fase": "90° - 120° (Pasivo asistido en plano escápula)" },
        { "movimiento": "Rotación externa pasiva", "fisiologico": "0° - 90°", "objetivo_fase": "20° - 30° (Brazo junto al cuerpo)" },
        { "movimiento": "Abducción pasiva", "fisiologico": "0° - 180°", "objetivo_fase": "70° - 80°" }
      ],
      "musculos_daniels": [
        { "musculo": "Supraespinoso (Músculo Diana)", "minimo_esperado": "0-1/5 (Contraindicada contracción activa forzada)" },
        { "musculo": "Infraespinoso / Redondo Menor (Músculo Diana)", "minimo_esperado": "0-1/5 (Contraindicada contracción activa)" },
        { "musculo": "Serrato Anterior y Trapecio Inferior (Músculo Diana)", "minimo_esperado": "3/5 (Estabilizadores de escápula)" }
      ],
      "items": [
        {
          "id": "flexion_pasiva_90",
          "criterio": "Alcanzar 90° de flexión pasiva sin dolor agudo punzante",
          "causas_no_cumplimiento": [
            "Rigidez capsular o capsulitis adhesiva secundaria a inmovilización rígida.",
            "Apresamiento subacromial por edema persistente en la bursa.",
            "Baja adherencia del paciente al protocolo de ejercicios pasivos en domicilio.",
            "Espasmo muscular antálgico de la musculatura periescapular y pectoral mayor."
          ]
        },
        {
          "id": "rotacion_externa_20",
          "criterio": "Alcanzar al menos 20° de rotación externa pasiva",
          "causas_no_cumplimiento": [
            "Excesiva tensión estructural de la sutura quirúrgica (reparación a tensión).",
            "Contractura o acortamiento del músculo subescapular.",
            "Temor o falta de tolerancia del paciente a la movilización pasiva."
          ]
        }
      ],
      "tests": [
        {
          "id": "test_hawkins_kennedy",
          "nombre": "Test de Hawkins-Kennedy",
          "descripcion": "Flexión a 90° y rotación interna forzada. Evalúa compromiso del espacio subacromial."
        }
      ]
    },
    {
      "id": "manguito_rotador_fase2",
      "region": "miembro_superior",
      "nombre": "Reparación de Manguito Rotador (Fase II: Semanas 6 - 12)",
      "rom": [
        { "movimiento": "Flexión anterior activa", "fisiologico": "0° - 180°", "objetivo_fase": "140° - 160° (Activo asistido a activo libre)" },
        { "movimiento": "Rotación externa activa", "fisiologico": "0° - 90°", "objetivo_fase": "45° - 60°" },
        { "movimiento": "Rotación interna activa", "fisiologico": "0° - 70°", "objetivo_fase": "Alcanzar L3-L5 detrás de la espalda" }
      ],
      "musculos_daniels": [
        { "musculo": "Supraespinoso (Músculo Diana)", "minimo_esperado": "3/5 (Inicio de cargas isotónicas ligeras < 1kg)" },
        { "musculo": "Infraespinoso / Redondo Menor (Músculo Diana)", "minimo_esperado": "3/5" },
        { "musculo": "Deltoides Anterior / Medio (Músculo Diana)", "minimo_esperado": "4/5" }
      ],
      "items": [
        {
          "id": "ritmo_escapular",
          "criterio": "Ausencia de ascenso/campaneo escapular compensatorio en la elevación",
          "causas_no_cumplimiento": [
            "Discinesia escapular por dominancia del trapecio superior.",
            "Inhibición o atrofia del trapecio inferior y serrato anterior."
          ]
        }
      ],
      "tests": [
        {
          "id": "test_jobe",
          "nombre": "Test de Jobe (Empty Can Test)",
          "descripcion": "Abducción 90° en plano de la escápula y rotación interna. Valora integridad del supraespinoso."
        },
        {
          "id": "test_patte",
          "nombre": "Test de Patte",
          "descripcion": "Evaluación de la rotación externa a 90° de abducción. Valora el infraespinoso."
        }
      ]
    },
    {
      "id": "manguito_rotador_fase3",
      "region": "miembro_superior",
      "nombre": "Reparación de Manguito Rotador (Fase III: Semanas 12 - 24)",
      "rom": [
        { "movimiento": "Flexión anterior y Abducción", "fisiologico": "0° - 180°", "objetivo_fase": "180° (Simétrico con lado contralateral)" },
        { "movimiento": "Rotación externa a 90° ABD", "fisiologico": "0° - 90°", "objetivo_fase": "80° - 90°" }
      ],
      "musculos_daniels": [
        { "musculo": "Supraespinoso / Infraespinoso (Músculo Diana)", "minimo_esperado": "4-5/5 (Fuerza resistencia y potencia)" },
        { "musculo": "Subescapular (Músculo Diana)", "minimo_esperado": "4-5/5" }
      ],
      "items": [
        {
          "id": "fuerza_funcional_retorno",
          "criterio": "Fuerza isocinética / dinamometría > 80% respecto al lado sano para gesto laboral",
          "causas_no_cumplimiento": [
            "Re-rotura estructural o curación defectuosa del tendón por infiltración grasa previa.",
            "Desacondicionamiento físico general del miembro superior."
          ]
        }
      ],
      "tests": [
        {
          "id": "test_gerber_lift_off",
          "nombre": "Test de Gerber (Lift-Off Test)",
          "descripcion": "Despegar la mano de la zona lumbar contra resistencia. Valora la fuerza del subescapular."
        }
      ]
    },
    {
      "id": "radio_distal_placa_fase1",
      "region": "miembro_superior",
      "nombre": "Osteosíntesis de Radio Distal con Placa Volar (Fase I: Semanas 2 - 6)",
      "rom": [
        { "movimiento": "Flexión de muñeca", "fisiologico": "0° - 80°", "objetivo_fase": "30° - 40°" },
        { "movimiento": "Extensión de muñeca", "fisiologico": "0° - 70°", "objetivo_fase": "30° - 40°" },
        { "movimiento": "Pronosupinación", "fisiologico": "80° - 90°", "objetivo_fase": "50° / 50°" }
      ],
      "musculos_daniels": [
        { "musculo": "Flexor Carpi Radialis / Ulnaris (Músculo Diana)", "minimo_esperado": "3/5" },
        { "musculo": "Extensor Carpi Radialis Longus / Brevis (Músculo Diana)", "minimo_esperado": "3/5" },
        { "musculo": "Flexor Pollicis Longus - FPL (Músculo Diana)", "minimo_esperado": "3/5" }
      ],
      "items": [
        {
          "id": "flexoextension_muneca_40",
          "criterio": "Alcanzar 40° de flexión y 40° de extensión activa a la semana 4",
          "causas_no_cumplimiento": [
            "Tenosinovitis reactiva o conflicto mecánico del flexor largo/extensores.",
            "Síndrome Doloroso Regional Complejo (SDRC Tipo I) de inicio temprano.",
            "Rigidez de la articulación radiocubital distal (ARCD)."
          ]
        }
      ],
      "tests": [
        {
          "id": "test_finkelstein",
          "nombre": "Test de Finkelstein",
          "descripcion": "Inclinación cubital de muñeca con pulgar atrapado. Evalúa tenosinovitis de De Quervain."
        }
      ]
    },
    {
      "id": "radio_distal_placa_fase2",
      "region": "miembro_superior",
      "nombre": "Osteosíntesis de Radio Distal con Placa Volar (Fase II: Semanas 6 - 12)",
      "rom": [
        { "movimiento": "Flexión y Extensión de muñeca", "fisiologico": "0° - 80° / 70°", "objetivo_fase": "60° / 50°" },
        { "movimiento": "Pronosupinación completa", "fisiologico": "80° - 90°", "objetivo_fase": "75° - 80° en ambas direcciones" }
      ],
      "musculos_daniels": [
        { "musculo": "Flexores y Extensores de la Muñeca (Músculo Diana)", "minimo_esperado": "4-5/5 (Fortalecimiento con dinamometría)" },
        { "musculo": "Musculatura Intrínseca de la Mano (Músculo Diana)", "minimo_esperado": "4/5" }
      ],
      "items": [
        {
          "id": "prension_fuerza_agarre",
          "criterio": "Fuerza de prensión en dinamómetro de Jamar > 70% respecto al lado contralateral",
          "causas_no_cumplimiento": [
            "Adherencias tendinosas persistentes en los compartimentos extensores/flexores.",
            "Consolidación viciosa o alteración de la inclinación radial."
          ]
        }
      ],
      "tests": [
        {
          "id": "test_tecla_piano",
          "nombre": "Test de la Tecla de Piano",
          "descripcion": "Presión sobre la cabeza del cúbito. Evalúa inestabilidad radiocubital distal (ARCD)."
        }
      ]
    },

    // ==========================================
    // --- MIEMBRO INFERIOR ---
    // ==========================================
    {
      "id": "lca_fase1",
      "region": "miembro_inferior",
      "nombre": "Reconstrucción de LCA (Fase I: Semanas 0 - 4)",
      "rom": [
        { "movimiento": "Extensión de rodilla", "fisiologico": "0°", "objetivo_fase": "0° (Extensión completa pasiva OBLIGATORIA)" },
        { "movimiento": "Flexión de rodilla", "fisiologico": "0° - 135°", "objetivo_fase": "90° (Semana 2) -> 110° (Semana 4)" }
      ],
      "musculos_daniels": [
        { "musculo": "Vasto Medial Interno - VMO (Músculo Diana)", "minimo_esperado": "3/5 (SLR sin rezago extensor)" },
        { "musculo": "Recto Femoral / Cuádriceps (Músculo Diana)", "minimo_esperado": "3/5" },
        { "musculo": "Glúteo Medio (Músculo Diana)", "minimo_esperado": "3/5 (Estabilizador del valgo dinámico)" }
      ],
      "items": [
        {
          "id": "extension_completa",
          "criterio": "Extensión completa pasiva y activa de rodilla (0° respecto al lado sano)",
          "causas_no_cumplimiento": [
            "Bloqueo mecánico por edema intraarticular / derrame grave (hemartros).",
            "Síndrome de Cyclops (proliferación de tejido fibroso en el injerto).",
            "Uso prolongado de almohadas bajo el hueco poplíteo durante el reposo.",
            "Inhibición del cuádriceps que impide el bloqueo activo terminal."
          ]
        }
      ],
      "tests": [
        {
          "id": "test_lachman",
          "nombre": "Test de Lachman",
          "descripcion": "Translación anterior de tibia a 20-30° de flexión. Evalúa traslación e tope de la plastia de LCA."
        }
      ]
    },
    {
      "id": "lca_fase2",
      "region": "miembro_inferior",
      "nombre": "Reconstrucción de LCA (Fase II: Semanas 4 - 12)",
      "rom": [
        { "movimiento": "Flexión de rodilla", "fisiologico": "0° - 135°", "objetivo_fase": "125° - 135° (Flexión completa activa)" },
        { "movimiento": "Extensión de rodilla", "fisiologico": "0°", "objetivo_fase": "0° (Manteniendo simetría pasiva)" }
      ],
      "musculos_daniels": [
        { "musculo": "Cuádriceps / Vasto Medial Interno (Músculo Diana)", "minimo_esperado": "4/5 (Sentadilla/Prensa unipodal)" },
        { "musculo": "Isquiotibiales (Músculo Diana)", "minimo_esperado": "4/5" },
        { "musculo": "Glúteo Mayor (Músculo Diana)", "minimo_esperado": "4/5" }
      ],
      "items": [
        {
          "id": "control_valgo_dinamico",
          "criterio": "Alineación en sentadilla unipodal sin caída en valgo dinámico de rodilla",
          "causas_no_cumplimiento": [
            "Debilidad o déficit de reclutamiento del glúteo medio y rotadores externos de cadera.",
            "Déficit en el control propioceptivo neuromuscular."
          ]
        }
      ],
      "tests": [
        {
          "id": "pivot_shift_test",
          "nombre": "Test de Pivot-Shift (Pivotaje)",
          "descripcion": "Subluxación rotacional de la rodilla. Valora la estabilidad rotacional del plastia de LCA."
        }
      ]
    },
    {
      "id": "lca_fase3",
      "region": "miembro_inferior",
      "nombre": "Reconstrucción de LCA (Fase III: Semanas 12 - 24+ / Retorno Deportivo)",
      "rom": [
        { "movimiento": "Flexoextensión de rodilla", "fisiologico": "0° - 135°", "objetivo_fase": "100% Simétrico e hipermóvil si es su patrón fisiológico" }
      ],
      "musculos_daniels": [
        { "musculo": "Cuádriceps e Isquiotibiales (Músculo Diana)", "minimo_esperado": "5/5 (Índice de simetría LSI > 90% en dinamometría)" }
      ],
      "items": [
        {
          "id": "hop_tests_simetria",
          "criterio": "LSI (Limb Symmetry Index) > 90% en batería de Single/Triple/Crossover Hop Tests",
          "causas_no_cumplimiento": [
            "Déficit en la tasa de desarrollo de fuerza (RFD) e inhibición muscular artrogénica residual.",
            "Kinesiofobia o falta de confianza en la estabilidad articular."
          ]
        }
      ],
      "tests": [
        {
          "id": "y_balance_test",
          "nombre": "Y-Balance Test (Lower Quarter)",
          "descripcion": "Prueba de control neuromuscular y alcance dinámico unipodal en 3 direcciones."
        }
      ]
    },
    {
      "id": "tendon_aquiles_fase1",
      "region": "miembro_inferior",
      "nombre": "Reparación Quirúrgica del Tendón de Aquiles (Fase I: Semanas 2 - 8)",
      "rom": [
        { "movimiento": "Dorsiflexión de tobillo", "fisiologico": "0° - 20°", "objetivo_fase": "0° (Posición neutra estricta a la Semana 6)" },
        { "movimiento": "Flexión plantar", "fisiologico": "0° - 50°", "objetivo_fase": "20° - 30° (Sin estiramiento pasivo forzado)" }
      ],
      "musculos_daniels": [
        { "musculo": "Sóleo / Gastrocnemios (Músculo Diana)", "minimo_esperado": "2/5 (Prohibida la flexión plantar contra resistencia)" },
        { "musculo": "Tibial Anterior (Músculo Diana)", "minimo_esperado": "4/5" },
        { "musculo": "Peroneos Largo y Corto (Músculo Diana)", "minimo_esperado": "3/5" }
      ],
      "items": [
        {
          "id": "dorsiflexion_neutra_semana6",
          "criterio": "Alcanzar 0° de dorsiflexión en tobillo (posición neutra) a la semana 6",
          "causas_no_cumplimiento": [
            "Elongación excesiva de la sutura por carga o estiramiento prematuro.",
            "Adherencia del complejo tendinoso al tejido cutáneo y paratendón.",
            "Espasmo o acortamiento adaptativo defensivo del complejo sóleo-gemelar."
          ]
        }
      ],
      "tests": [
        {
          "id": "test_thompson",
          "nombre": "Test de Thompson",
          "descripcion": "Compresión manual de la pantorrilla en decúbito prono. Valora la continuidad estructural del tendón."
        }
      ]
    },
    {
      "id": "tendon_aquiles_fase2",
      "region": "miembro_inferior",
      "nombre": "Reparación Quirúrgica del Tendón de Aquiles (Fase II: Semanas 8 - 16)",
      "rom": [
        { "movimiento": "Dorsiflexión activa de tobillo", "fisiologico": "0° - 20°", "objetivo_fase": "10° - 15° (Progresando movilidad con rodilla doblada)" },
        { "movimiento": "Flexión plantar activa", "fisiologico": "0° - 50°", "objetivo_fase": "40° - 50°" }
      ],
      "musculos_daniels": [
        { "musculo": "Tríceps Sural - Gastrocnemios/Sóleo (Músculo Diana)", "minimo_esperado": "3-4/5 (Elevación de talón unipodal activa)" },
        { "musculo": "Tibial Posterior y Peroneos (Músculo Diana)", "minimo_esperado": "4/5" }
      ],
      "items": [
        {
          "id": "elevacion_talon_unipodal",
          "criterio": "Capacidad de realizar al menos 5-10 elevaciones de talón unipodal (Single Heel Raise)",
          "causas_no_cumplimiento": [
            "Atrofia severa del gastrocnemio/sóleo por el periodo de inmovilización.",
            "Elongación (lengthening) del tendón cicatricial que reduce el brazo de palanca."
          ]
        }
      ],
      "tests": [
        {
          "id": "test_matles",
          "nombre": "Test de Matles",
          "descripcion": "Evaluación de la posición del pie en flexión de rodilla a 90° en prono. Compara caída en equino."
        }
      ]
    }
  ];

  // Filtro 1: Cambio de Región
  selectRegion.addEventListener('change', (e) => {
    const region = e.target.value;
    selectCirugia.innerHTML = '<option value="">-- Seleccionar Intervención / Fase --</option>';

    if (!region) {
      selectCirugia.disabled = true;
      checklistContainer.classList.add('hidden');
      return;
    }

    const cirugiasFiltradas = db.filter(c => c.region === region);
    cirugiasFiltradas.forEach(cirugia => {
      const option = document.createElement('option');
      option.value = cirugia.id;
      option.textContent = cirugia.nombre;
      selectCirugia.appendChild(option);
    });

    selectCirugia.disabled = false;
    checklistContainer.classList.add('hidden');
  });

  // Filtro 2: Cambio de Cirugía
  selectCirugia.addEventListener('change', (e) => {
    const idSeleccionado = e.target.value;
    const cirugiaData = db.find(c => c.id === idSeleccionado);

    if (!cirugiaData) {
      checklistContainer.classList.add('hidden');
      return;
    }

    renderROM(cirugiaData.rom || []);
    renderDaniels(cirugiaData.musculos_daniels || []);
    renderChecklist(cirugiaData.items || []);
    renderTests(cirugiaData.tests || []);

    checklistContainer.classList.remove('hidden');
  });

  // Renderizar Rangos de Movilidad
  function renderROM(romData) {
    romContainer.innerHTML = '';
    if (romData.length === 0) {
      romContainer.innerHTML = '<p class="text-xs text-slate-400">Sin rangos específicos parametrizados.</p>';
      return;
    }

    romData.forEach(r => {
      const div = document.createElement('div');
      div.className = 'bg-slate-900/60 p-2.5 rounded-lg border border-slate-700/50 flex flex-col justify-between gap-1';
      div.innerHTML = `
        <span class="font-medium text-slate-200">${r.movimiento}</span>
        <div class="flex items-center justify-between text-xs mt-1">
          <span class="text-slate-400">Fisiológico: <strong class="text-slate-300">${r.fisiologico}</strong></span>
          <span class="text-amber-400 font-semibold bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/50">Objetivo Fase: ${r.objetivo_fase}</span>
        </div>
      `;
      romContainer.appendChild(div);
    });
  }

  // Renderizar Balance Muscular Daniels
  function renderDaniels(musculosData) {
    danielsContainer.innerHTML = '';
    if (musculosData.length === 0) {
      danielsContainer.innerHTML = '<p class="text-xs text-slate-400">Sin grupos musculares específicos.</p>';
      return;
    }

    musculosData.forEach((m) => {
      const div = document.createElement('div');
      div.className = 'bg-slate-900/60 p-2.5 rounded-lg border border-slate-700/50 space-y-2';
      div.innerHTML = `
        <div class="flex items-center justify-between text-xs">
          <span class="font-medium text-slate-200">${m.musculo}</span>
          <span class="text-slate-400">Mín. esperado: <strong class="text-emerald-400">${m.minimo_esperado}</strong></span>
        </div>
        <div class="flex items-center gap-2">
          <label class="text-xs text-slate-400">Evaluación actual:</label>
          <select class="bg-slate-800 border border-slate-600 text-xs text-slate-200 rounded px-2 py-1 outline-none focus:ring-1 focus:ring-emerald-500">
            <option value="0">0 - Ausencia de contracción</option>
            <option value="1">1 - Contracción perceptible sin movimiento</option>
            <option value="2">2 - Movimiento completo sin gravedad</option>
            <option value="3">3 - Movimiento completo contra gravedad</option>
            <option value="4">4 - Movimiento contra resistencia moderada</option>
            <option value="5">5 - Fuerza normal (resistencia máxima)</option>
          </select>
        </div>
      `;
      danielsContainer.appendChild(div);
    });
  }

  // Renderizar Criterios de Progresión
  function renderChecklist(items) {
    itemsList.innerHTML = '';
    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'bg-slate-800 p-4 rounded-xl border border-slate-700 transition-all';
      card.innerHTML = `
        <div class="flex items-start justify-between gap-4">
          <label class="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" data-id="${item.id}" class="item-checkbox w-5 h-5 text-sky-500 rounded bg-slate-900 border-slate-600 focus:ring-sky-500" checked>
            <span class="text-slate-200 font-medium">${item.criterio}</span>
          </label>
          <span id="badge-${item.id}" class="text-xs font-semibold px-2.5 py-1 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">Completado</span>
        </div>
        <div id="causas-${item.id}" class="mt-4 pt-3 border-t border-slate-700/60 hidden">
          <p class="text-xs font-semibold text-rose-400 uppercase tracking-wider mb-2">Causas probables de no consecución (según GPC):</p>
          <ul class="list-disc list-inside text-sm text-slate-300 space-y-1">
            ${item.causas_no_cumplimiento.map(causa => `<li>${causa}</li>`).join('')}
          </ul>
        </div>
      `;
      itemsList.appendChild(card);

      const checkbox = card.querySelector(`.item-checkbox`);
      const badge = card.querySelector(`#badge-${item.id}`);
      const causasDiv = card.querySelector(`#causas-${item.id}`);

      checkbox.addEventListener('change', (e) => {
        if (e.target.checked) {
          badge.textContent = 'Completado';
          badge.className = 'text-xs font-semibold px-2.5 py-1 rounded bg-emerald-950 text-emerald-400 border border-emerald-800';
          causasDiv.classList.add('hidden');
        } else {
          badge.textContent = 'No Conseguió Objetivo';
          badge.className = 'text-xs font-semibold px-2.5 py-1 rounded bg-rose-950 text-rose-400 border border-rose-800';
          causasDiv.classList.remove('hidden');
        }
      });
    });
  }

  // Renderizar Tests Ortopédicos
  function renderTests(tests) {
    testsList.innerHTML = '';
    if (tests.length === 0) {
      testsList.innerHTML = '<p class="text-sm text-slate-400 italic">No hay tests específicos asociados a esta fase quirúrgica.</p>';
      return;
    }

    tests.forEach(test => {
      const card = document.createElement('div');
      card.className = 'bg-slate-800/80 p-4 rounded-xl border border-slate-700/80 space-y-3';
      card.innerHTML = `
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 class="font-medium text-slate-200">${test.nombre}</h3>
            <p class="text-xs text-slate-400 mt-0.5">${test.descripcion}</p>
          </div>
          <select class="test-select bg-slate-900 border border-slate-600 text-xs rounded-lg p-2 text-slate-200 outline-none focus:ring-2 focus:ring-indigo-500">
            <option value="negativo">Negativo (Normal)</option>
            <option value="positivo">Positivo (Hallazgo)</option>
            <option value="no_evaluable">No Evaluable / Contraindicado</option>
          </select>
        </div>
      `;
      testsList.appendChild(card);
    });
  }
});