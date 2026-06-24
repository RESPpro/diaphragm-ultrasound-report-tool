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
  { key: "DD", shortLabel: "DD", labelZh: "膈肌移动度", labelEn: "Diaphragm excursion", unit: "mm" },
  { key: "DD-di", shortLabel: "DD-di", labelZh: "深吸气膈肌移动度", labelEn: "Deep inspiration excursion", unit: "mm" },
  { key: "DD peak", shortLabel: "DD 储备值", labelZh: "膈肌移动度储备值", labelEn: "Excursion reserve", unit: "mm" },
  { key: "DPSV", shortLabel: "DPSV", labelZh: "膈肌收缩期峰值速度", labelEn: "Peak inspiratory diaphragm velocity", unit: "cm/s" },
  { key: "DPDV", shortLabel: "DPDV", labelZh: "膈肌舒张期峰值速度", labelEn: "Peak expiratory diaphragm velocity", unit: "cm/s" },
  { key: "PSD", shortLabel: "PSD", labelZh: "膈肌滑动位移", labelEn: "Pleural sliding displacement", unit: "mm" },
  { key: "DT-ee", shortLabel: "DT-ee", labelZh: "呼气末膈肌厚度", labelEn: "End-expiratory thickness", unit: "mm" },
  { key: "DT-ei", shortLabel: "DT-ei", labelZh: "吸气末膈肌厚度", labelEn: "End-inspiratory thickness", unit: "mm" },
  { key: "DT-edi", shortLabel: "DT-edi", labelZh: "吸呼气膈肌厚度差", labelEn: "Inspiratory-expiratory thickness difference", unit: "mm" },
  { key: "DT mean", shortLabel: "DT 储备值", labelZh: "膈肌厚度储备值", labelEn: "Thickness reserve", unit: "mm" },
  { key: "DTF", shortLabel: "DTF", labelZh: "膈肌增厚率", labelEn: "Diaphragm thickening fraction", unit: "%" },
  { key: "DTF-di", shortLabel: "DTF-di", labelZh: "深吸气膈肌增厚率", labelEn: "Deep inspiration thickening fraction", unit: "%" },
  { key: "DTF peak", shortLabel: "DTF 储备值", labelZh: "膈肌增厚率储备值", labelEn: "Thickening reserve", unit: "%" }
];

const uiText = {
  zh: {
    pageLanguage: "页面语言",
    heroTitle: "膈肌超声标准参考小工具",
    heroIntro: "输入患者年龄、性别与各项膈肌超声测量值，页面会像化验单一样同时给出正常参考范围、单项结果判断，以及患者膈肌功能的整体摘要。点击任一指标标题，可查看标准测量方法与超声提示意义。",
    reportTitle: "患者结果报告",
    reportNote: "基于当前年龄组和性别参考范围自动判读",
    age: "年龄",
    sex: "性别",
    male: "男性",
    female: "女性",
    agePlaceholder: "请输入 18-99 岁",
    colMetric: "指标",
    colPatientValue: "患者值",
    colRange: "正常范围",
    colUnit: "单位",
    colResult: "结果",
    colNote: "提示",
    practiceTitleDefault: "选择一个指标",
    practicePlaceholder: "点击任一指标名称，查看测量点、测量方法及低于/高于阈值时的超声提示意义。",
    practiceKicker: "标准做法",
    sourceKicker: "数据依据",
    sourceTitle: "数据来源说明",
    sourceParagraph1: "参考范围与标准测量说明依据用户提供的文献截图录入。范围数据覆盖 18-99 岁成人，按年龄组与性别区分。",
    sourceParagraph2: "缩写说明：DD 为膈肌移动度，DD-di 为深吸气膈肌移动度，DPSV 为膈肌收缩期峰值速度，DPDV 为膈肌舒张期峰值速度，PSD 为膈肌滑动位移，DT-ee 为呼气末膈肌厚度，DT-ei 为吸气末膈肌厚度，DT-edi 为吸呼气厚度差，DTF 为膈肌增厚率，DTF-di 为深吸气膈肌增厚率，DT 为分组统计。",
    invalidAge: "当前数据仅支持 18-99 岁成人，请输入有效年龄。",
    matchedSummary: (age, sexLabel, ageGroup) => `患者 ${age} 岁，${sexLabel}。已自动匹配 ${ageGroup} 岁年龄组的膈肌超声正常参考范围。`,
    pending: "待录入",
    low: "偏低",
    high: "偏高",
    normal: "正常",
    notEntered: "未录入",
    noValueNote: "未提供该指标测量值。",
    inRangeNote: "位于当前年龄组和性别对应的正常参考范围内。",
    reportStateTitle: "报告状态",
    reportStateBody: "请输入 18-99 岁之间的年龄后再生成患者报告。",
    enteredItems: "已录入项目",
    normalItems: "正常项目",
    abnormalItems: "异常项目",
    overallSummary: "整体摘要",
    enteredSuffix: (entered, total) => `共 ${total} 项`,
    normalSuffix: "处于参考范围内",
    abnormalSuffix: (lowCount, highCount) => `偏低 ${lowCount} 项，偏高 ${highCount} 项`,
    overallNone: "尚未录入任何患者测量值。",
    overallNormal: "已录入项目均位于正常范围内。",
    overallAbnormal: (lowCount, highCount) => `已录入项目中有 ${lowCount} 项偏低，${highCount} 项偏高，建议结合临床情况综合判断。`,
    ageOutOfRangeTitle: "年龄超出范围",
    ageOutOfRangeBody: "请输入 18-99 岁之间的年龄后再查看参考范围与标准做法。",
    inputPlaceholder: "输入数值",
    dataLabelMetric: "指标",
    dataLabelPatientValue: "患者值",
    dataLabelRange: "正常范围",
    dataLabelUnit: "单位",
    dataLabelResult: "结果",
    dataLabelNote: "提示",
    practiceMeasurePoint: "测量点",
    practiceMethod: "测量方法",
    practiceLow: "低于阈值时",
    practiceHigh: "高于阈值时"
  },
  en: {
    pageLanguage: "Page language",
    heroTitle: "Diaphragm Ultrasound Reference Tool",
    heroIntro: "Enter patient age, sex, and diaphragm ultrasound measurements. The page will generate a bloodwork-style report with reference ranges, per-variable interpretation, and an overall diaphragm summary. Click any metric name to review the standard ultrasound technique and clinical meaning.",
    reportTitle: "Patient Report",
    reportNote: "Automatically interpreted against age- and sex-specific reference ranges",
    age: "Age",
    sex: "Sex",
    male: "Male",
    female: "Female",
    agePlaceholder: "Enter age 18-99",
    colMetric: "Metric",
    colPatientValue: "Patient value",
    colRange: "Reference range",
    colUnit: "Unit",
    colResult: "Result",
    colNote: "Interpretation",
    practiceTitleDefault: "Select a metric",
    practicePlaceholder: "Click any metric name to review the scan position, measurement method, and the meaning of values below or above the reference range.",
    practiceKicker: "Standard Practice",
    sourceKicker: "Source Basis",
    sourceTitle: "Source Notes",
    sourceParagraph1: "Reference ranges and measurement guidance were transcribed from the literature screenshots provided by the user. The dataset covers adults aged 18-99 years and is stratified by age band and sex.",
    sourceParagraph2: "Abbreviations: DD = diaphragm excursion, DD-di = deep inspiration excursion, DPSV = peak inspiratory diaphragm velocity, DPDV = peak expiratory diaphragm velocity, PSD = pleural sliding displacement, DT-ee = end-expiratory diaphragm thickness, DT-ei = end-inspiratory diaphragm thickness, DT-edi = inspiratory-expiratory thickness difference, DTF = diaphragm thickening fraction, DTF-di = deep inspiration thickening fraction.",
    invalidAge: "This dataset currently supports adults aged 18-99 years only. Please enter a valid age.",
    matchedSummary: (age, sexLabel, ageGroup) => `Patient age ${age}, ${sexLabel}. Matched to the ${ageGroup} year age band reference range.`,
    pending: "Pending",
    low: "Low",
    high: "High",
    normal: "Normal",
    notEntered: "Not entered",
    noValueNote: "No measurement has been entered for this metric.",
    inRangeNote: "Within the expected reference range for the selected age band and sex.",
    reportStateTitle: "Report status",
    reportStateBody: "Enter an age between 18 and 99 years to generate the patient report.",
    enteredItems: "Entered metrics",
    normalItems: "Normal metrics",
    abnormalItems: "Abnormal metrics",
    overallSummary: "Overall summary",
    enteredSuffix: (entered, total) => `${entered} of ${total} metrics`,
    normalSuffix: "within reference range",
    abnormalSuffix: (lowCount, highCount) => `${lowCount} low, ${highCount} high`,
    overallNone: "No patient measurements have been entered yet.",
    overallNormal: "All entered measurements are within the expected reference range.",
    overallAbnormal: (lowCount, highCount) => `${lowCount} entered metric(s) are low and ${highCount} are high. Interpret with the full clinical context.`,
    ageOutOfRangeTitle: "Age out of range",
    ageOutOfRangeBody: "Enter an age between 18 and 99 years to review the reference range and practice guidance.",
    inputPlaceholder: "Enter value",
    dataLabelMetric: "Metric",
    dataLabelPatientValue: "Patient value",
    dataLabelRange: "Reference range",
    dataLabelUnit: "Unit",
    dataLabelResult: "Result",
    dataLabelNote: "Interpretation",
    practiceMeasurePoint: "Scan position",
    practiceMethod: "Method",
    practiceLow: "If below range",
    practiceHigh: "If above range"
  }
};

let currentLanguage = "zh";

const standardPractice = {
  DD: {
    measurementPoint: "右侧锁骨中线和腋前线之间与肝门下缘交界，探头倾斜指向头侧，获取膈肌顶面切面。",
    measurementPointZh: "右侧锁骨中线和腋前线之间与肝门下缘交界，探头倾斜指向头侧，获取膈肌顶面切面。",
    measurementPointEn: "At the right subcostal window between the midclavicular and anterior axillary lines near the inferior liver margin, angle the probe cranially to obtain the diaphragmatic dome.",
    methodZh: "M 模式，观察平静呼吸时相邻肌层移动距离。",
    methodEn: "Use M-mode and measure the excursion distance during quiet breathing.",
    lowMeaningZh: "膈肌收缩功能减低。",
    lowMeaningEn: "Suggests reduced diaphragm contractile function.",
    highMeaningZh: "膈肌主动收缩增强，提示存在潜在吸气努力。",
    highMeaningEn: "Suggests increased active contraction and possible inspiratory effort."
  },
  "DD-di": {
    measurementPoint: "同 DD。",
    measurementPointZh: "同 DD。",
    measurementPointEn: "Same scan position as DD.",
    methodZh: "M 模式，嘱受试者做最大深吸气，观察膈肌移动距离。",
    methodEn: "Use M-mode during maximal deep inspiration and measure excursion distance.",
    lowMeaningZh: "膈肌最大收缩功能减低。",
    lowMeaningEn: "Suggests reduced maximal diaphragm contraction.",
    highMeaningZh: "文献未给出明确高值意义。",
    highMeaningEn: "No clear high-value interpretation was reported in the source."
  },
  "DD peak": {
    measurementPoint: "同 DD。",
    measurementPointZh: "同 DD。",
    measurementPointEn: "Same scan position as DD.",
    methodZh: "DD 相关估值，便于快速参考膈肌移动幅度水平。",
    methodEn: "Derived DD reserve estimate used to quickly reference excursion reserve.",
    lowMeaningZh: "膈肌储备收缩功能减低。",
    lowMeaningEn: "Suggests reduced diaphragmatic reserve contraction.",
    highMeaningZh: "膈肌存在潜在吸气努力。",
    highMeaningEn: "May indicate increased inspiratory effort."
  },
  DPSV: {
    measurementPoint: "同 DD。",
    measurementPointZh: "同 DD。",
    measurementPointEn: "Same scan position as DD.",
    methodZh: "TD 模式，将取样框置于膈顶位置，获取膈肌运动速度频谱，测量收缩期峰值速度。",
    methodEn: "Use tissue Doppler at the diaphragmatic dome and measure peak inspiratory velocity.",
    lowMeaningZh: "膈肌储备收缩功能减低。",
    lowMeaningEn: "Suggests reduced diaphragmatic reserve contraction.",
    highMeaningZh: "膈肌存在潜在吸气努力。",
    highMeaningEn: "May indicate increased inspiratory effort."
  },
  DPDV: {
    measurementPoint: "同 DD。",
    measurementPointZh: "同 DD。",
    measurementPointEn: "Same scan position as DD.",
    methodZh: "TD 模式，将取样框置于膈顶位置，获取膈肌运动速度频谱，测量舒张期峰值速度。",
    methodEn: "Use tissue Doppler at the diaphragmatic dome and measure peak expiratory velocity.",
    lowMeaningZh: "文献未给出明确低值意义。",
    lowMeaningEn: "No clear low-value interpretation was reported in the source.",
    highMeaningZh: "膈肌存在潜在呼气努力。",
    highMeaningEn: "May indicate increased expiratory effort."
  },
  PSD: {
    measurementPoint: "右侧腋中线肋与肝交界处，沿肋间斜切面。",
    measurementPointZh: "右侧腋中线肋与肝交界处，沿肋间斜切面。",
    measurementPointEn: "At the right mid-axillary intercostal window over the liver-lung boundary using an oblique intercostal view.",
    methodZh: "测量肝脏交界点于呼气末期和吸气末期移动距离，二者差值即 PSD。",
    methodEn: "Measure the displacement of the liver-lung boundary between end-expiration and end-inspiration; the difference is PSD.",
    lowMeaningZh: "提示肺下界移动度降低。",
    lowMeaningEn: "Suggests reduced lower lung boundary mobility.",
    highMeaningZh: "文献未给出明确高值意义。",
    highMeaningEn: "No clear high-value interpretation was reported in the source."
  },
  "DT-ee": {
    measurementPoint: "右侧腋中线 8-10 肋间隙，经肝获取膈肌切面。",
    measurementPointZh: "右侧腋中线 8-10 肋间隙，经肝获取膈肌切面。",
    measurementPointEn: "At the right mid-axillary 8th-10th intercostal spaces using the liver window to obtain the diaphragm zone of apposition.",
    methodZh: "测量呼气末期胸膜与腹膜之间肌肉厚度。",
    methodEn: "Measure muscle thickness between pleural and peritoneal layers at end-expiration.",
    lowMeaningZh: "膈肌变薄。",
    lowMeaningEn: "Suggests diaphragm thinning.",
    highMeaningZh: "膈肌增厚。",
    highMeaningEn: "Suggests diaphragm thickening."
  },
  "DT-ei": {
    measurementPoint: "同 DT-ee。",
    measurementPointZh: "同 DT-ee。",
    measurementPointEn: "Same scan position as DT-ee.",
    methodZh: "测量吸气末期胸膜与腹膜之间肌肉厚度。",
    methodEn: "Measure muscle thickness between pleural and peritoneal layers at end-inspiration.",
    lowMeaningZh: "膈肌变薄。",
    lowMeaningEn: "Suggests diaphragm thinning.",
    highMeaningZh: "膈肌增厚。",
    highMeaningEn: "Suggests diaphragm thickening."
  },
  "DT-edi": {
    measurementPoint: "同 DT-ee。",
    measurementPointZh: "同 DT-ee。",
    measurementPointEn: "Same scan position as DT-ee.",
    methodZh: "吸气末厚度减去呼气末厚度，测量胸膜与腹膜之间肌肉厚度变化。",
    methodEn: "Calculate the thickness change from end-expiration to end-inspiration.",
    lowMeaningZh: "膈肌变薄。",
    lowMeaningEn: "Suggests diaphragm thinning.",
    highMeaningZh: "膈肌增厚。",
    highMeaningEn: "Suggests diaphragm thickening."
  },
  "DT mean": {
    measurementPoint: "同 DT-ee。",
    measurementPointZh: "同 DT-ee。",
    measurementPointEn: "Same scan position as DT-ee.",
    methodZh: "DT-ei 与 DT-ei 差值相关估值，用于辅助观察膈肌厚度变化幅度。",
    methodEn: "Derived thickness reserve estimate used to summarize thickness change amplitude.",
    lowMeaningZh: "膈肌储备厚度减低。",
    lowMeaningEn: "Suggests reduced diaphragm thickness reserve.",
    highMeaningZh: "文献未给出明确高值意义。",
    highMeaningEn: "No clear high-value interpretation was reported in the source."
  },
  DTF: {
    measurementPoint: "同 DT-ee。",
    measurementPointZh: "同 DT-ee。",
    measurementPointEn: "Same scan position as DT-ee.",
    methodZh: "计算公式（DT-ei - DT-ee）/DT-ee。",
    methodEn: "Calculate using (DT-ei - DT-ee) / DT-ee.",
    lowMeaningZh: "膈肌收缩功能减低。",
    lowMeaningEn: "Suggests reduced diaphragm contractile function.",
    highMeaningZh: "膈肌主动收缩增强，提示存在潜在吸气努力。",
    highMeaningEn: "Suggests increased active contraction and possible inspiratory effort."
  },
  "DTF-di": {
    measurementPoint: "同 DT-ee。",
    measurementPointZh: "同 DT-ee。",
    measurementPointEn: "Same scan position as DT-ee.",
    methodZh: "计算深吸气状态下的增厚率相关指标。",
    methodEn: "Calculate the thickening fraction during maximal deep inspiration.",
    lowMeaningZh: "膈肌最大收缩功能减低。",
    lowMeaningEn: "Suggests reduced maximal diaphragm contraction.",
    highMeaningZh: "文献未给出明确高值意义。",
    highMeaningEn: "No clear high-value interpretation was reported in the source."
  },
  "DTF peak": {
    measurementPoint: "同 DT-ee。",
    measurementPointZh: "同 DT-ee。",
    measurementPointEn: "Same scan position as DT-ee.",
    methodZh: "DTF-di 与 DTF 相关估值，用于参考膈肌增厚功能水平。",
    methodEn: "Derived thickening reserve estimate used to reference diaphragm thickening performance.",
    lowMeaningZh: "膈肌储备收缩功能减低。",
    lowMeaningEn: "Suggests reduced diaphragmatic reserve contraction.",
    highMeaningZh: "文献未给出明确高值意义。",
    highMeaningEn: "No clear high-value interpretation was reported in the source."
  }
};

const standardPracticeEn = {
  DD: {
    measurementPoint: "Between the right midclavicular line and anterior axillary line at the inferior hepatic margin, with the probe angled cranially to obtain the diaphragm dome view.",
    method: "Use M-mode and measure excursion during quiet breathing.",
    lowMeaning: "Suggests reduced diaphragm contractile function.",
    highMeaning: "Suggests increased active contraction and possible increased inspiratory effort."
  },
  "DD-di": {
    measurementPoint: "Same as DD.",
    method: "Use M-mode during maximal deep inspiration and measure diaphragm excursion.",
    lowMeaning: "Suggests reduced maximal diaphragm contraction.",
    highMeaning: "No clear high-value interpretation reported in the source."
  },
  "DD peak": {
    measurementPoint: "Same as DD.",
    method: "Derived excursion reserve estimate used as a quick reference for diaphragm excursion capacity.",
    lowMeaning: "Suggests reduced diaphragm reserve contraction.",
    highMeaning: "Suggests possible increased inspiratory effort."
  },
  DPSV: {
    measurementPoint: "Same as DD.",
    method: "Use tissue Doppler mode with the sample volume at the diaphragm dome and measure peak inspiratory velocity.",
    lowMeaning: "Suggests reduced diaphragm reserve contraction.",
    highMeaning: "Suggests possible increased inspiratory effort."
  },
  DPDV: {
    measurementPoint: "Same as DD.",
    method: "Use tissue Doppler mode with the sample volume at the diaphragm dome and measure peak expiratory velocity.",
    lowMeaning: "No clear low-value interpretation reported in the source.",
    highMeaning: "Suggests possible increased expiratory effort."
  },
  PSD: {
    measurementPoint: "At the right midaxillary line at the rib-liver interface along an intercostal oblique scan plane.",
    method: "Measure movement of the liver interface between end-expiration and end-inspiration; the difference is PSD.",
    lowMeaning: "Suggests reduced movement of the lower lung boundary.",
    highMeaning: "No clear high-value interpretation reported in the source."
  },
  "DT-ee": {
    measurementPoint: "At the right midaxillary line in the 8th-10th intercostal space through the liver acoustic window.",
    method: "Measure muscle thickness between pleural and peritoneal layers at end-expiration.",
    lowMeaning: "Suggests diaphragm thinning.",
    highMeaning: "Suggests diaphragm thickening."
  },
  "DT-ei": {
    measurementPoint: "Same as DT-ee.",
    method: "Measure muscle thickness between pleural and peritoneal layers at end-inspiration.",
    lowMeaning: "Suggests diaphragm thinning.",
    highMeaning: "Suggests diaphragm thickening."
  },
  "DT-edi": {
    measurementPoint: "Same as DT-ee.",
    method: "Subtract end-expiratory thickness from end-inspiratory thickness to quantify thickness change.",
    lowMeaning: "Suggests diaphragm thinning.",
    highMeaning: "Suggests diaphragm thickening."
  },
  "DT mean": {
    measurementPoint: "Same as DT-ee.",
    method: "Derived thickness reserve estimate used to help judge the magnitude of diaphragm thickness change.",
    lowMeaning: "Suggests reduced diaphragm thickness reserve.",
    highMeaning: "No clear high-value interpretation reported in the source."
  },
  DTF: {
    measurementPoint: "Same as DT-ee.",
    method: "Calculated as (DT-ei - DT-ee) / DT-ee.",
    lowMeaning: "Suggests reduced diaphragm contractile function.",
    highMeaning: "Suggests increased active contraction and possible increased inspiratory effort."
  },
  "DTF-di": {
    measurementPoint: "Same as DT-ee.",
    method: "Calculated as a deep-inspiration thickening index.",
    lowMeaning: "Suggests reduced maximal diaphragm contraction.",
    highMeaning: "No clear high-value interpretation reported in the source."
  },
  "DTF peak": {
    measurementPoint: "Same as DT-ee.",
    method: "Derived thickening reserve estimate used to reference diaphragm thickening performance.",
    lowMeaning: "Suggests reduced diaphragm reserve contraction.",
    highMeaning: "No clear high-value interpretation reported in the source."
  }
};

const ageInput = document.querySelector("#age");
const sexSelect = document.querySelector("#sex");
const reportSummary = document.querySelector("#reportSummary");
const reportTableBody = document.querySelector("#reportTableBody");
const selectionSummary = document.querySelector("#selectionSummary");
const practiceTitle = document.querySelector("#practiceTitle");
const practiceContent = document.querySelector("#practiceContent");
const langZhButton = document.querySelector("#langZh");
const langEnButton = document.querySelector("#langEn");

function t() {
  return uiText[currentLanguage];
}

function getMetricLabel(metric) {
  return currentLanguage === "zh" ? metric.labelZh : metric.labelEn;
}

function getMetricShortLabel(metric) {
  return currentLanguage === "zh" ? metric.shortLabel : metric.key;
}

function getPractice(metricKey) {
  return currentLanguage === "zh" ? standardPractice[metricKey] : standardPracticeEn[metricKey];
}

function applyStaticText() {
  document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";
  document.querySelector("#languageLabel").textContent = t().pageLanguage;
  document.querySelector("#heroTitle").textContent = t().heroTitle;
  document.querySelector("#heroIntro").textContent = t().heroIntro;
  document.querySelector("#reportKicker").textContent = currentLanguage === "zh" ? "患者报告" : "Patient Report";
  document.querySelector("#reportTitle").textContent = t().reportTitle;
  document.querySelector("#reportNote").textContent = t().reportNote;
  document.querySelector("#ageLabel").textContent = t().age;
  document.querySelector("#sexLabel").textContent = t().sex;
  document.querySelector("#maleOption").textContent = t().male;
  document.querySelector("#femaleOption").textContent = t().female;
  ageInput.setAttribute("aria-label", t().age);
  ageInput.setAttribute("placeholder", t().agePlaceholder);
  sexSelect.setAttribute("aria-label", t().sex);
  document.querySelector("#colMetric").textContent = t().colMetric;
  document.querySelector("#colPatientValue").textContent = t().colPatientValue;
  document.querySelector("#colRange").textContent = t().colRange;
  document.querySelector("#colUnit").textContent = t().colUnit;
  document.querySelector("#colResult").textContent = t().colResult;
  document.querySelector("#colNote").textContent = t().colNote;
  document.querySelector("#practiceKicker").textContent = t().practiceKicker;
  document.querySelector("#sourceKicker").textContent = t().sourceKicker;
  document.querySelector("#sourceTitle").textContent = t().sourceTitle;
  document.querySelector("#sourceParagraph1").textContent = t().sourceParagraph1;
  document.querySelector("#sourceParagraph2").textContent = t().sourceParagraph2;
  langZhButton.classList.toggle("is-active", currentLanguage === "zh");
  langEnButton.classList.toggle("is-active", currentLanguage === "en");
}

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

function parseRange(rangeText) {
  const [lower, upper] = rangeText.split("-").map(Number);
  return { lower, upper };
}

function formatRange(rangeText, unit) {
  return `${rangeText} ${unit}`;
}

function getPatientValue(metricKey) {
  const input = reportTableBody.querySelector(`[data-metric-input="${metricKey}"]`);
  if (!input || input.value.trim() === "") {
    return null;
  }

  return Number(input.value);
}

function classifyValue(metric, rangeText) {
  const patientValue = getPatientValue(metric.key);
  if (patientValue === null || Number.isNaN(patientValue)) {
    return {
      patientValue: t().notEntered,
      statusLabel: t().pending,
      statusClass: "badge-empty",
      note: t().noValueNote
    };
  }

  const { lower, upper } = parseRange(rangeText);
  if (patientValue < lower) {
    return {
      patientValue: patientValue.toFixed(2),
      statusLabel: t().low,
      statusClass: "badge-low",
      note: currentLanguage === "zh" ? standardPractice[metric.key].lowMeaningZh : standardPractice[metric.key].lowMeaningEn
    };
  }

  if (patientValue > upper) {
    return {
      patientValue: patientValue.toFixed(2),
      statusLabel: t().high,
      statusClass: "badge-high",
      note: currentLanguage === "zh" ? standardPractice[metric.key].highMeaningZh : standardPractice[metric.key].highMeaningEn
    };
  }

  return {
    patientValue: patientValue.toFixed(2),
    statusLabel: t().normal,
    statusClass: "badge-normal",
    note: t().inRangeNote
  };
}

function renderReport(ageGroup, sex) {
  if (!ageGroup) {
    reportSummary.innerHTML = `
      <article class="summary-card">
        <h3>${t().reportStateTitle}</h3>
        <p>${t().reportStateBody}</p>
      </article>
    `;
    reportTableBody.innerHTML = "";
    return;
  }

  const ranges = rangesByGroup[ageGroup][sex];
  let normalCount = 0;
  let lowCount = 0;
  let highCount = 0;
  let enteredCount = 0;

  const rows = metricDefinitions.map((metric) => {
    const result = classifyValue(metric, ranges[metric.key]);

    if (result.statusLabel === t().normal) {
      normalCount += 1;
      enteredCount += 1;
    } else if (result.statusLabel === t().low) {
      lowCount += 1;
      enteredCount += 1;
    } else if (result.statusLabel === t().high) {
      highCount += 1;
      enteredCount += 1;
    }

    return `
      <tr>
        <td class="metric-name-cell" data-label="${t().dataLabelMetric}"><button class="metric-trigger" type="button" data-metric="${metric.key}">${getMetricShortLabel(metric)}</button><br>${getMetricLabel(metric)}</td>
        <td data-label="${t().dataLabelPatientValue}"><input class="value-input" type="number" step="0.01" data-metric-input="${metric.key}" value="${result.patientValue === t().notEntered ? "" : result.patientValue}" placeholder="${t().inputPlaceholder}"></td>
        <td data-label="${t().dataLabelRange}">${formatRange(ranges[metric.key], metric.unit)}</td>
        <td data-label="${t().dataLabelUnit}">${metric.unit}</td>
        <td data-label="${t().dataLabelResult}"><span class="badge ${result.statusClass}">${result.statusLabel}</span></td>
        <td data-label="${t().dataLabelNote}">${result.note}</td>
      </tr>
  }).join("");

  const overallText = enteredCount === 0
    ? t().overallNone
    : lowCount === 0 && highCount === 0
      ? t().overallNormal
      : t().overallAbnormal(lowCount, highCount);

  reportSummary.innerHTML = `
    <article class="summary-card">
      <h3>${t().enteredItems}</h3>
      <p><span class="summary-value">${enteredCount}</span>${t().enteredSuffix(enteredCount, metricDefinitions.length)}</p>
    </article>
    <article class="summary-card">
      <h3>${t().normalItems}</h3>
      <p><span class="summary-value">${normalCount}</span>${t().normalSuffix}</p>
    </article>
    <article class="summary-card">
      <h3>${t().abnormalItems}</h3>
      <p><span class="summary-value">${lowCount + highCount}</span>${t().abnormalSuffix(lowCount, highCount)}</p>
    </article>
    <article class="summary-card">
      <h3>${t().overallSummary}</h3>
      <p>${overallText}</p>
    </article>
  `;

  reportTableBody.innerHTML = rows;
}

function renderSummary(age, ageGroup, sex) {
  const sexLabel = sex === "male" ? t().male : t().female;
  if (!ageGroup) {
    selectionSummary.textContent = t().invalidAge;
    return;
  }

  selectionSummary.textContent = t().matchedSummary(age, sexLabel, ageGroup);
}

function renderPractice(metricKey) {
  const metric = metricDefinitions.find((item) => item.key === metricKey);
  const practice = getPractice(metricKey);

  practiceTitle.textContent = `${getMetricShortLabel(metric)} · ${getMetricLabel(metric)}`;
  practiceContent.innerHTML = `
    <section class="practice-block">
      <h3>${t().practiceMeasurePoint}</h3>
      <p>${currentLanguage === "zh" ? practice.measurementPointZh : practice.measurementPointEn}</p>
    </section>
    <section class="practice-block">
      <h3>${t().practiceMethod}</h3>
      <p>${currentLanguage === "zh" ? practice.methodZh : practice.methodEn}</p>
    </section>
    <section class="practice-block">
      <h3>${t().practiceLow}</h3>
      <p>${currentLanguage === "zh" ? practice.lowMeaningZh : practice.lowMeaningEn}</p>
    </section>
    <section class="practice-block">
      <h3>${t().practiceHigh}</h3>
      <p>${currentLanguage === "zh" ? practice.highMeaningZh : practice.highMeaningEn}</p>
    </section>
  `;
}

function renderRanges() {
  const { age, ageGroup, sex } = getSelection();

  renderSummary(age, ageGroup, sex);

  if (!ageGroup) {
    practiceTitle.textContent = t().ageOutOfRangeTitle;
    practiceContent.innerHTML = `<p class="placeholder">${t().ageOutOfRangeBody}</p>`;
    renderReport(ageGroup, sex);
    return;
  }

  renderReport(ageGroup, sex);
}

ageInput.addEventListener("input", renderRanges);
sexSelect.addEventListener("change", renderRanges);
reportTableBody.addEventListener("input", () => {
  const { ageGroup, sex } = getSelection();
  renderReport(ageGroup, sex);
});

reportTableBody.addEventListener("click", (event) => {
  const trigger = event.target.closest(".metric-trigger");
  if (!trigger) {
    return;
  }

  renderPractice(trigger.dataset.metric);
});

langZhButton.addEventListener("click", () => {
  currentLanguage = "zh";
  applyStaticText();
  renderRanges();
  renderPractice("DD");
});

langEnButton.addEventListener("click", () => {
  currentLanguage = "en";
  applyStaticText();
  renderRanges();
  renderPractice("DD");
});

applyStaticText();
renderRanges();
renderPractice("DD");
