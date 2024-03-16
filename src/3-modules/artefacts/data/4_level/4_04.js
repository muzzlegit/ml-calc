//--- Комплект Торговец
const kit = {
  kit: {
    setTitle: "Торговец",
    level: 4,
    buffs: [
      {
        type: "artefactKit",
        player: null,
        target: "player",
        appliedOn: "all",
        targetType: "player",
        units: null,
        property: "experience",
        valueIndex: 0,
        value: [4],
        description: ["Получаемый героем опыт в бою +400%"],
        battle: true,
        title: "Комплект Торговец",
      },
    ],
  },
  back: {
    level: 4,
    ancient: false,
    perfect: false,
    title: "Манто торговца",
    place: "back",
    twoHanded: false,
    set: "Торговец",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "unit",
          units: ["porter"],
          title: "Манто торговца",
          property: "capacity",
          valueIndex: 0,
          value: [4, 4.8],
          description: [
            "Вместимость Носильщиков +400%",
            "Вместимость Носильщиков +480%",
          ],
          battle: true,
        },
      ],
      perfect: [],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  armor: {
    level: 4,
    ancient: false,
    perfect: false,
    title: "Мантия великого торговца",
    place: "armor",
    twoHanded: false,
    set: "Торговец",
    buffs: {
      common: [],
      perfect: [
        {
          title: "Мантия великого торговца",
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "fortification",
          units: null,
          property: "damageRate",
          valueIndex: 0,
          value: [2],
          description: ["Эффективность уничтожения войск на укреплениях +200%"],
          battle: true,
        },
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "unit",
          units: [
            "porter",
            "swordsman",
            "cavalier",
            "flying",
            "archer",
            "healer",
            "mercenary",
            "mage",
          ],
          title: "Мантия великого торговца",
          property: "healthRate",
          valueIndex: 0,
          value: [0.12],
          description: ["Здоровье всех войск +12%"],
          battle: true,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  ring: {
    level: 4,
    ancient: false,
    perfect: false,
    title: "Браслет вольного купца",
    place: "ring",
    twoHanded: false,
    set: "Торговец",
    buffs: {
      common: [],
      perfect: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "magicTower",
          units: null,
          title: "Браслет вольного купца",
          property: "damageRate",
          valueIndex: 0,
          value: [0.2],
          description: ["Атака магических башен +20%"],
          battle: true,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  head: {
    level: 4,
    ancient: false,
    perfect: false,
    title: "Шлем глобальной застройки",
    place: "head",
    twoHanded: false,
    set: "Торговец",
    buffs: {
      common: [],
      perfect: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "tower",
          units: null,
          title: "Шлем глобальной застройки",
          property: "damageRate",
          valueIndex: 0,
          value: [1.5],
          description: ["Атака башен +150%"],
          battle: true,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  bag: {
    level: 4,
    ancient: false,
    perfect: false,
    title: "Перчатка истребителя воров",
    place: "bag",
    twoHanded: false,
    set: "Торговец",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "player",
          units: null,
          title: "Перчатка истребителя воров",
          property: "experience",
          valueIndex: 0,
          value: [2, 2.4],
          description: [
            "Получаемый героем опыт в бою +200%",
            "Получаемый героем опыт в бою +240%",
          ],
          battle: true,
        },
      ],
      perfect: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "player",
          units: null,
          title: "Перчатка истребителя воров",
          property: "experience",
          valueIndex: 0,
          value: [2],
          description: ["Получаемый героем опыт в бою +200%"],
          battle: true,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  rightHand: {
    level: 4,
    ancient: false,
    perfect: false,
    title: "Меч подавления конкурентов",
    place: "rightHand",
    twoHanded: false,
    set: "Торговец",
    buffs: {
      common: [],
      perfect: [
        {
          type: "artefact",
          player: null,
          target: "enemy",
          appliedOn: "all",
          targetType: "unit",
          units: ["mercenary"],
          title: "Меч подавления конкурентов",
          property: "attackRate",
          valueIndex: 0,
          value: [-0.12],
          description: ["Атака наемников -12%"],
          battle: true,
        },
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "unit",
          units: [
            "porter",
            "swordsman",
            "cavalier",
            "flying",
            "archer",
            "healer",
            "mercenary",
            "mage",
          ],
          title: "Меч подавления конкурентов",
          property: "defenseLevel",
          valueIndex: 0,
          value: [4],
          description: ["Предел максимальной защиты +4"],
          battle: true,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  boots: {
    level: 4,
    ancient: false,
    perfect: false,
    title: "Скороходы торговца",
    place: "boots",
    twoHanded: false,
    set: "Торговец",
    buffs: {
      common: [],
      perfect: [],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  neck: {
    level: 4,
    ancient: false,
    perfect: false,
    title: "Воротник торговца",
    place: "neck",
    twoHanded: false,
    set: "Торговец",
    buffs: {
      common: [],
      perfect: [],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  leftHand: {
    level: 4,
    ancient: false,
    perfect: false,
    title: "Щит подкупа наемников",
    place: "leftHand",
    twoHanded: false,
    set: "Торговец",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "enemy",
          appliedOn: "all",
          targetType: "unit",
          units: ["mercenary"],
          title: "Щит подкупа наемников",
          property: "attackRate",
          valueIndex: 0,
          value: [-0.45, -0.54],
          description: [
            "Атака Наемников -45%&Действует на противника",
            "Атака Наемников -54%&Действует на противника",
          ],
          battle: true,
        },
      ],
      perfect: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "unit",
          units: [
            "swordsman",
            "cavalier",
            "flying",
            "archer",
            "healer",
            "mercenary",
            "mage",
          ],
          title: "Щит подкупа наемников",
          property: "attackRate",
          valueIndex: 0,
          value: [0.12],
          description: ["Атака всех войск +12%"],
          battle: true,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  pants: {
    level: 4,
    ancient: false,
    perfect: false,
    title: "Штаны быстрой торговли",
    place: "pants",
    twoHanded: false,
    set: "Торговец",
    buffs: {
      common: [],
      perfect: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "unit",
          units: [
            "porter",
            "swordsman",
            "cavalier",
            "flying",
            "archer",
            "healer",
            "mercenary",
            "mage",
          ],
          title: "Штаны быстрой торговли",
          property: "defense",
          valueIndex: 0,
          value: [12],
          description: ["Защита всех войск +12"],
          battle: true,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  belt: {
    level: 4,
    ancient: false,
    perfect: false,
    title: "Пояс торговца",
    place: "belt",
    twoHanded: false,
    set: "Торговец",
    buffs: {
      common: [],
      perfect: [],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
  bracers: {
    level: 4,
    ancient: false,
    perfect: false,
    title: "Наручи оберега купцов",
    place: "bracers",
    twoHanded: false,
    set: "Торговец",
    buffs: {
      common: [],
      perfect: [
        {
          type: "artefact",
          player: null,
          target: "enemy",
          appliedOn: "all",
          targetType: "magicTower",
          units: null,
          title: "Наручи оберега купцов",
          property: "damageRate",
          valueIndex: 0,
          value: [-0.12],
          description: ["Атака магических башен -12%"],
          battle: true,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
  },
};

export default Object.values(kit);