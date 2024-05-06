//--- Комплект Верховный эльф
const kit = {
  kit: {
    setTitle: "Верховный эльф",
    level: 5,
    buffs: [
      {
        type: "artefactKit",
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
        title: "Комплект Верховный эльф",
        property: "healthRate",
        valueIndex: 0,
        value: [0.5],
        description: ["Здоровье всех войск +50%"],
        battle: true,
        inWork: false,
      },
      {
        type: "artefactKit",
        player: null,
        target: "player",
        appliedOn: "all",
        targetType: "unit",
        units: ["healer"],
        title: "Комплект Верховный эльф",
        property: "additionalResurrection",
        valueIndex: 0,
        value: [1],
        description: ["Каждый целитель воскрешает +1 персонажей"],
        battle: true,
        inWork: false,
      },
      {
        type: "artefactKit",
        player: null,
        target: "player",
        appliedOn: "all",
        targetType: "player",
        units: null,
        property: "experience",
        valueIndex: 0,
        value: [5],
        description: ["Получаемый героем опыт в бою +500%"],
        battle: true,
        inWork: false,
        title: "Комплект Верховный эльф",
      },
    ],
  },
  back: {
    level: 5,
    ancient: false,
    perfect: false,
    title: "Плащ невидимки",
    place: "back",
    twoHanded: false,
    set: "Верховный эльф",
    buffs: {
      common: [],
      perfect: [],
    },
    runes: [],
    sharpening: [],
    battle: true,
    inWork: false,
  },
  armor: {
    level: 5,
    ancient: false,
    perfect: false,
    title: "Кольчуга бессмертия",
    place: "armor",
    twoHanded: false,
    set: "Верховный эльф",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player_ally",
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
          title: "Кольчуга бессмертия",
          property: "healthRate",
          valueIndex: 0,
          value: [0.3, 0.36],
          description: [
            "Здоровье всех войск +30%&Действует на себя, союзника",
            "Здоровье всех войск +36%&Действует на себя, союзника",
          ],
          battle: true,
          inWork: false,
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
          title: "Кольчуга бессмертия",
          property: "defenseLevel",
          valueIndex: 0,
          value: [20, 24],
          description: [
            "Предел максимальной защиты +20",
            "Предел максимальной защиты +24",
          ],
          battle: true,
          inWork: false,
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
            "porter",
            "swordsman",
            "cavalier",
            "flying",
            "archer",
            "healer",
            "mercenary",
            "mage",
          ],
          title: "Кольчуга бессмертия",
          property: "healthRate",
          valueIndex: 0,
          value: [0.15],
          description: ["Здоровье всех войск +15%"],
          battle: true,
          inWork: false,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
    inWork: false,
  },
  ring: {
    level: 5,
    ancient: false,
    perfect: false,
    title: "Кольцо подавления",
    place: "ring",
    twoHanded: false,
    set: "Верховный эльф",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "enemy",
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
          title: "Кольцо подавления",
          property: "defenseLevel",
          valueIndex: 0,
          value: [-30, -36],
          description: [
            "Предел максимальной защиты -30&Действует на противника",
            "Предел максимальной защиты -36&Действует на противника",
          ],
          battle: true,
          inWork: false,
        },
      ],
      perfect: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "magicTower",
          units: null,
          title: "Кольцо подавления",
          property: "damageRate",
          valueIndex: 0,
          value: [0.25],
          description: ["Атака магических башен +25%"],
          battle: true,
          inWork: false,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
    inWork: false,
  },
  head: {
    level: 5,
    ancient: false,
    perfect: false,
    title: "Шлем эльфийского мудреца",
    place: "head",
    twoHanded: false,
    set: "Верховный эльф",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "enemy",
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
          title: "Шлем эльфийского мудреца",
          property: "amountRate",
          valueIndex: 0,
          value: [-0.5, -0.6],
          description: [
            "50% войск не участвует в бою&Действует на противника",
            "60% войск не участвует в бою&Действует на противника",
          ],
          battle: true,
          inWork: false,
        },
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "player",
          units: null,
          title: "Шлем эльфийского мудреца",
          property: "experience",
          valueIndex: 0,
          value: [2, 2.4],
          description: [
            "Получаемый героем опыт в бою +200%",
            "Получаемый героем опыт в бою +240%",
          ],
          battle: true,
          inWork: false,
        },
      ],
      perfect: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "tower",
          units: null,
          title: "Шлем эльфийского мудреца",
          property: "damageRate",
          valueIndex: 0,
          value: [2],
          description: ["Атака башен +200%"],
          battle: true,
          inWork: false,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
    inWork: false,
  },
  bag: {
    level: 5,
    ancient: false,
    perfect: false,
    title: "Эликсир жизни",
    place: "bag",
    twoHanded: false,
    set: "Верховный эльф",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "unit",
          units: ["healer"],
          title: "Эликсир жизни",
          property: "perfectResurrection",
          valueIndex: 0,
          value: [0.5, 0.6],
          description: [
            "Целители воскрешают +50%&Целители воскрешают персонажей, игнорируя эффекты добивания раненых",
            "Целители воскрешают +60%&Целители воскрешают персонажей, игнорируя эффекты добивания раненых",
          ],
          battle: true,
          inWork: false,
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
          title: "Эликсир жизни",
          property: "experience",
          valueIndex: 0,
          value: [2.5],
          description: ["Получаемый героем опыт в бою +250%"],
          battle: true,
          inWork: false,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
    inWork: false,
  },
  rightHand: {
    level: 5,
    ancient: false,
    perfect: false,
    title: "Клинок Света",
    place: "rightHand",
    twoHanded: false,
    set: "Верховный эльф",
    buffs: {
      common: [
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
          title: "Клинок Света",
          property: "attackRate",
          valueIndex: 0,
          value: [0.4, 0.48],
          description: ["Атака всех войск +40%", "Атака всех войск +48%"],
          battle: true,
          inWork: false,
        },
        {
          type: "artefact",
          player: null,
          target: "enemy",
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
          title: "Клинок Света",
          property: "healthRate",
          valueIndex: 0,
          value: [-0.2, -0.24],
          description: [
            "Здоровье всех войск -20%&Действует на противника",
            "Здоровье всех войск -24%&Действует на противника",
          ],
          battle: true,
          inWork: false,
        },
      ],
      perfect: [
        {
          type: "artefact",
          player: null,
          target: "enemy",
          appliedOn: "all",
          targetType: "unit",
          units: ["mercenary"],
          title: "Клинок Света",
          property: "attackRate",
          valueIndex: 0,
          value: [-0.15],
          description: ["Атака наемников -15%"],
          battle: true,
          inWork: false,
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
          title: "Клинок Света",
          property: "defenseLevel",
          valueIndex: 0,
          value: [5],
          description: ["Предел максимальной защиты +5"],
          battle: true,
          inWork: false,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
    inWork: false,
  },
  boots: {
    level: 5,
    ancient: false,
    perfect: false,
    title: "Сапоги Верховного эльфа",
    place: "boots",
    twoHanded: false,
    set: "Верховный эльф",
    buffs: {
      common: [
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
          title: "Сапоги Верховного эльфа",
          property: "healthRate",
          valueIndex: 0,
          value: [0.3, 0.36],
          description: ["Здоровье всех войск +30%", "Здоровье всех войск +36%"],
          battle: true,
          inWork: false,
        },
      ],
      perfect: [],
    },
    runes: [],
    sharpening: [],
    battle: true,
    inWork: false,
  },
  neck: {
    level: 5,
    ancient: false,
    perfect: false,
    title: "Кулон слабости",
    place: "neck",
    twoHanded: false,
    set: "Верховный эльф",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "enemy",
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
          title: "Кулон слабости",
          property: "attackRate",
          valueIndex: 0,
          value: [-0.5, -0.6],
          description: [
            "Атака всех войск -50%&Действует на противника",
            "Атака всех войск -60%&Действует на противника",
          ],
          battle: true,
          inWork: false,
        },
      ],
      perfect: [],
    },
    runes: [],
    sharpening: [],
    battle: true,
    inWork: false,
  },
  leftHand: {
    level: 5,
    ancient: false,
    perfect: false,
    title: "Щит Хранителя эльфов",
    place: "leftHand",
    twoHanded: false,
    set: "Верховный эльф",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player_ally",
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
          title: "Щит Хранителя эльфов",
          property: "defense",
          valueIndex: 0,
          value: [40, 48],
          description: [
            "Защита всех войск +40&Действует на себя, союзника",
            "Защита всех войск +48&Действует на себя, союзника",
          ],
          battle: true,
          inWork: false,
        },
        {
          type: "artefact",
          player: null,
          target: "player_ally",
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
          title: "Щит Хранителя эльфов",
          property: "defenseLevel",
          valueIndex: 0,
          value: [10, 12],
          description: [
            "Предел максимальной защиты +10&Действует на себя, союзника",
            "Предел максимальной защиты +12&Действует на себя, союзника",
          ],
          battle: true,
          inWork: false,
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
          title: "Щит Хранителя эльфов",
          property: "attackRate",
          valueIndex: 0,
          value: [0.15],
          description: ["Атака всех войск +15%"],
          battle: true,
          inWork: false,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
    inWork: false,
  },
  pants: {
    level: 5,
    ancient: false,
    perfect: false,
    title: "Штаны адаптации",
    place: "pants",
    twoHanded: false,
    set: "Верховный эльф",
    buffs: {
      common: [
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
          title: "Штаны адаптации",
          property: "healthRate",
          valueIndex: 0,
          value: [0.4, 0.48],
          description: ["Здоровье всех войск +40%", "Здоровье всех войск +48%"],
          battle: true,
          inWork: false,
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
            "porter",
            "swordsman",
            "cavalier",
            "flying",
            "archer",
            "healer",
            "mercenary",
            "mage",
          ],
          title: "Штаны адаптации",
          property: "defense",
          valueIndex: 0,
          value: [15],
          description: ["Защита всех войск +15"],
          battle: true,
          inWork: false,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
    inWork: false,
  },
  belt: {
    level: 5,
    ancient: false,
    perfect: false,
    title: "Пояс Верховного эльфа",
    place: "belt",
    twoHanded: false,
    set: "Верховный эльф",
    buffs: {
      common: [],
      perfect: [],
    },
    runes: [],
    sharpening: [],
    battle: true,
    inWork: false,
  },
  bracers: {
    level: 5,
    ancient: false,
    perfect: false,
    title: "Браслет лесного духа",
    place: "bracers",
    twoHanded: false,
    set: "Верховный эльф",
    buffs: {
      common: [
        {
          type: "artefact",
          player: null,
          target: "player",
          appliedOn: "all",
          targetType: "player",
          units: null,
          title: "Браслет лесного духа",
          property: "attackBoost",
          valueIndex: 0,
          value: [0.2, 0.24],
          description: ["Усиление атаки армии 20%", "Усиление атаки армии 24%"],
          battle: true,
          inWork: false,
        },
        {
          type: "artefact",
          player: null,
          target: "enemy",
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
          title: "Браслет лесного духа",
          property: "defense",
          valueIndex: 0,
          value: [-20, -24],
          description: [
            "Защита всех войск -20&Действует на противника",
            "Защита всех войск -24&Действует на противника",
          ],
          battle: true,
          inWork: false,
        },
      ],
      perfect: [
        {
          type: "artefact",
          player: null,
          target: "enemy",
          appliedOn: "all",
          targetType: "magicTower",
          units: null,
          title: "Браслет лесного духа",
          property: "damageRate",
          value: [-0.15],
          description: ["Атака магических башен -15%"],
          battle: true,
          inWork: false,
        },
      ],
    },
    runes: [],
    sharpening: [],
    battle: true,
    inWork: false,
  },
};

export default Object.values(kit);
