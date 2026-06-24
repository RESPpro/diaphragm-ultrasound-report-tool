const rangesByGroup = {
  "18-39": {
    male: {
      DD: "11.52-26.67",
      "DD-di": "41.07-80.83",
      "DD peak": "27.08-61.80",
      DPSV: "1.85-3.15",
      DPDV: "1.55-2.95",
      PSD: "9.20-33.70",
      "DT-ee": "1.39-2.60",
      "DT-ei": "1.74-3.27",
      "DT-edi": "2.91-6.19",
      "DT mean": "0.69-3.44",
      DTF: "14.36-50.13",
      "DTF-di": "60.24-222.29",
      "DTF peak": "31.73-185.45"
    },
    female: {
      DD: "11.70-27.87",
      "DD-di": "37.71-76.03",
      "DD peak": "21.41-56.53",
      DPSV: "1.85-3.20",
      DPDV: "1.55-3.00",
      PSD: "9.44-31.23",
      "DT-ee": "1.10-2.00",
      "DT-ei": "1.40-2.70",
      "DT-edi": "2.43-5.68",
      "DT mean": "0.67-3.62",
      DTF: "14.50-54.73",
      "DTF-di": "74.08-277.85",
      "DTF peak": "42.91-253.65"
    }
  },
  "40-59": {
    male: {
      DD: "9.67-30.21",
      "DD-di": "40.00-79.08",
      "DD peak": "23.54-58.79",
      DPSV: "1.76-3.41",
      DPDV: "1.58-3.00",
      PSD: "7.39-32.16",
      "DT-ee": "1.40-2.59",
      "DT-ei": "1.78-3.47",
      "DT-edi": "2.80-6.26",
      "DT mean": "0.56-3.71",
      DTF: "13.55-48.69",
      "DTF-di": "51.15-220.27",
      "DTF peak": "24.71-194.20"
    },
    female: {
      DD: "11.80-27.55",
      "DD-di": "34.58-77.80",
      "DD peak": "18.40-57.35",
      DPSV: "1.75-3.15",
      DPDV: "1.50-2.91",
      PSD: "8.41-29.61",
      "DT-ee": "1.19-2.10",
      "DT-ei": "1.50-2.90",
      "DT-edi": "2.30-5.43",
      "DT mean": "0.64-3.15",
      DTF: "14.35-55.87",
      "DTF-di": "65.90-239.15",
      "DTF peak": "38.12-209.03"
    }
  },
  "60-79": {
    male: {
      DD: "10.70-26.92",
      "DD-di": "40.49-77.19",
      "DD peak": "24.80-58.86",
      DPSV: "1.91-3.12",
      DPDV: "1.59-3.02",
      PSD: "6.69-31.49",
      "DT-ee": "1.37-2.70",
      "DT-ei": "1.65-3.50",
      "DT-edi": "2.77-5.97",
      "DT mean": "0.55-3.42",
      DTF: "14.85-55.83",
      "DTF-di": "47.22-231.50",
      "DTF peak": "26.17-205.31"
    },
    female: {
      DD: "10.82-27.70",
      "DD-di": "35.12-70.18",
      "DD peak": "19.90-51.68",
      DPSV: "1.75-3.21",
      DPDV: "1.51-3.00",
      PSD: "7.76-29.04",
      "DT-ee": "1.21-2.20",
      "DT-ei": "1.53-2.80",
      "DT-edi": "2.42-5.43",
      "DT mean": "0.55-3.15",
      DTF: "15.05-46.67",
      "DTF-di": "61.38-224.50",
      "DTF peak": "36.18-200.64"
    }
  },
  "80-99": {
    male: {
      DD: "12.50-19.92",
      "DD-di": "37.60-64.09",
      "DD peak": "24.60-48.90",
      DPSV: "1.90-3.00",
      DPDV: "1.50-2.84",
      PSD: "7.60-29.74",
      "DT-ee": "1.54-2.60",
      "DT-ei": "1.87-3.19",
      "DT-edi": "2.97-4.37",
      "DT mean": "0.77-1.91",
      DTF: "19.81-27.33",
      "DTF-di": "58.45-144.46",
      "DTF peak": "38.65-122.89"
    },
    female: {
      DD: "8.80-16.46",
      "DD-di": "30.60-56.76",
      "DD peak": "17.90-41.08",
      DPSV: "1.65-3.27",
      DPDV: "1.58-2.99",
      PSD: "6.90-25.13",
      "DT-ee": "1.15-1.89",
      "DT-ei": "1.35-2.19",
      "DT-edi": "1.63-3.89",
      "DT mean": "0.25-1.96",
      DTF: "14.96-41.59",
      "DTF-di": "31.01-147.59",
      "DTF peak": "15.82-125.06"
    }
  }
};

const metricDefinitions = [
  { key: "DD", title: "DD", label: "膈肌移动度", unit: "mm" },
  { key: "DD-di", title: "DD-di", label: "深吸气膈肌移动度", unit: "mm" },
  { key: "DD peak", title: "DD 储备值", label: "膈肌移动度储备值", unit: "mm" },
  { key: "DPSV", title: "DPSV", label: "膈肌收缩期峰值速度", unit: "cm/s" },
  { key: "DPDV", title: "DPDV", label: "膈肌舒张期峰值速度", unit: "cm/s" },
  { key: "PSD", title: "PSD", label: "膈肌滑动位移", unit: "mm" },
  { key: "DT-ee", title: "DT-ee", label: "呼气末膈肌厚度", unit: "mm" },
  { key: "DT-ei", title: "DT-ei", label: "吸气末膈肌厚度", unit: "mm" },
  { key: "DT-edi", title: "DT-edi", label: "吸呼气膈肌厚度差", unit: "mm" },
  { key: "DT mean", title: "DT 储备值", label: "膈肌厚度储备值", unit: "mm" },
  { key: "DTF", title: "DTF", label: "膈肌增厚率", unit: "%" },
  { key: "DTF-di", title: "DTF-di", label: "深吸气膈肌增厚率", unit: "%" },
  { key: "DTF peak", title: "DTF 储备值", label: "膈肌增厚率储备值", unit: "%" }
];

const standardPractice = {
  DD: {
    measurementPoint: "右侧锁骨中线和腋前线之间与肝门下缘交界，探头倾斜指向头侧，获取膈肌顶面切面。",
    method: "M 模式，观察平静呼吸时相邻肌层移动距离。",
    lowMeaning: "膈肌收缩功能减低。",
    highMeaning: "膈肌主动收缩增强，提示存在潜在吸气努力。"
  },
  "DD-di": {
    measurementPoint: "同 DD。",
    method: "M 模式，嘱受试者做最大深吸气，观察膈肌移动距离。",
    lowMeaning: "膈肌最大收缩功能减低。",
    highMeaning: "文献未给出明确高值意义。"
  },
  "DD peak": {
    measurementPoint: "同 DD。",
    method: "DD 相关估值，便于快速参考膈肌移动幅度水平。",
    lowMeaning: "膈肌储备收缩功能减低。",
    highMeaning: "膈肌存在潜在吸气努力。"
  },
  DPSV: {
    measurementPoint: "同 DD。",
    method: "TD 模式，将取样框置于膈顶位置，获取膈肌运动速度频谱，测量收缩期峰值速度。",
    lowMeaning: "膈肌储备收缩功能减低。",
    highMeaning: "膈肌存在潜在吸气努力。"
  },
  DPDV: {
    measurementPoint: "同 DD。",
    method: "TD 模式，将取样框置于膈顶位置，获取膈肌运动速度频谱，测量舒张期峰值速度。",
    lowMeaning: "文献未给出明确低值意义。",
    highMeaning: "膈肌存在潜在呼气努力。"
  },
  PSD: {
    measurementPoint: "右侧腋中线肋与肝交界处，沿肋间斜切面。",
    method: "测量肝脏交界点于呼气末期和吸气末期移动距离，二者差值即 PSD。",
    lowMeaning: "提示肺下界移动度降低。",
    highMeaning: "文献未给出明确高值意义。"
  },
  "DT-ee": {
    measurementPoint: "右侧腋中线 8-10 肋间隙，经肝获取膈肌切面。",
    method: "测量呼气末期胸膜与腹膜之间肌肉厚度。",
    lowMeaning: "膈肌变薄。",
    highMeaning: "膈肌增厚。"
  },
  "DT-ei": {
    measurementPoint: "同 DT-ee。",
    method: "测量吸气末期胸膜与腹膜之间肌肉厚度。",
    lowMeaning: "膈肌变薄。",
    highMeaning: "膈肌增厚。"
  },
  "DT-edi": {
    measurementPoint: "同 DT-ee。",
    method: "吸气末厚度减去呼气末厚度，测量胸膜与腹膜之间肌肉厚度变化。",
    lowMeaning: "膈肌变薄。",
    highMeaning: "膈肌增厚。"
  },
  "DT mean": {
    measurementPoint: "同 DT-ee。",
    method: "DT-ei 与 DT-ei 差值相关估值，用于辅助观察膈肌厚度变化幅度。",
    lowMeaning: "膈肌储备厚度减低。",
    highMeaning: "文献未给出明确高值意义。"
  },
  DTF: {
    measurementPoint: "同 DT-ee。",
    method: "计算公式（DT-ei - DT-ee）/DT-ee。",
    lowMeaning: "膈肌收缩功能减低。",
    highMeaning: "膈肌主动收缩增强，提示存在潜在吸气努力。"
  },
  "DTF-di": {
    measurementPoint: "同 DT-ee。",
    method: "计算深吸气状态下的增厚率相关指标。",
    lowMeaning: "膈肌最大收缩功能减低。",
    highMeaning: "文献未给出明确高值意义。"
  },
  "DTF peak": {
    measurementPoint: "同 DT-ee。",
    method: "DTF-di 与 DTF 相关估值，用于参考膈肌增厚功能水平。",
    lowMeaning: "膈肌储备收缩功能减低。",
    highMeaning: "文献未给出明确高值意义。"
  }
};

const ageInput = document.querySelector("#age");
const sexSelect = document.querySelector("#sex");
const metricGrid = document.querySelector("#metricGrid");
const selectionSummary = document.querySelector("#selectionSummary");
const practiceTitle = document.querySelector("#practiceTitle");
const practiceContent = document.querySelector("#practiceContent");

function resolveAgeGroup(age) {
  if (age >= 18 && age <= 39) {
    return "18-39";
  }

  if (age >= 40 && age <= 59) {
    return "40-59";
  }

  if (age >= 60 && age <= 79) {
    return "60-79";
  }

  if (age >= 80 && age <= 99) {
    return "80-99";
  }

  return null;
}

function getSelection() {
  const age = Number(ageInput.value);
  return {
    age,
    ageGroup: resolveAgeGroup(age),
    sex: sexSelect.value
  };
}

function renderSummary(age, ageGroup, sex) {
  const sexLabel = sex === "male" ? "男性" : "女性";
  if (!ageGroup) {
    selectionSummary.textContent = "当前数据仅支持 18-99 岁成人，请输入有效年龄。";
    return;
  }

  selectionSummary.textContent = `患者 ${age} 岁，${sexLabel}。已自动匹配 ${ageGroup} 岁年龄组的膈肌超声正常参考范围。`;
}

function renderPractice(metricKey) {
  const metric = metricDefinitions.find((item) => item.key === metricKey);
  const practice = standardPractice[metricKey];

  practiceTitle.textContent = `${metric.title} · ${metric.label}`;
  practiceContent.innerHTML = `
    <section class="practice-block">
      <h3>测量点</h3>
      <p>${practice.measurementPoint}</p>
    </section>
    <section class="practice-block">
      <h3>测量方法</h3>
      <p>${practice.method}</p>
    </section>
    <section class="practice-block">
      <h3>低于阈值时</h3>
      <p>${practice.lowMeaning}</p>
    </section>
    <section class="practice-block">
      <h3>高于阈值时</h3>
      <p>${practice.highMeaning}</p>
    </section>
  `;
}

function renderRanges() {
  const { age, ageGroup, sex } = getSelection();

  renderSummary(age, ageGroup, sex);

  if (!ageGroup) {
    metricGrid.innerHTML = "";
    practiceTitle.textContent = "年龄超出范围";
    practiceContent.innerHTML = '<p class="placeholder">请输入 18-99 岁之间的年龄后再查看参考范围与标准做法。</p>';
    return;
  }

  const ranges = rangesByGroup[ageGroup][sex];

  metricGrid.innerHTML = metricDefinitions.map((metric) => `
    <article class="metric-card">
      <button class="metric-title" type="button" data-metric="${metric.key}">${metric.title}</button>
      <p class="metric-label">${metric.label}</p>
      <p class="metric-range">${ranges[metric.key]}</p>
      <p class="metric-unit">单位: ${metric.unit}</p>
    </article>
  `).join("");
}

ageInput.addEventListener("input", renderRanges);
sexSelect.addEventListener("change", renderRanges);

metricGrid.addEventListener("click", (event) => {
  const trigger = event.target.closest(".metric-title");
  if (!trigger) {
    return;
  }

  renderPractice(trigger.dataset.metric);
});

renderRanges();
renderPractice("DD");