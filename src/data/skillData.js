const skillData = {
  // ----------------------------------------------- UR -----------------------------------------------
  Lucifer: {
    ultimate: {
      type: 'Ultimate',
      name: 'Holy Chaos',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Lucifer folds his wings to charge and then bursts out an aura of holy energy from the sky for ',
          },
          { type: 'value', content: '2.5s' },
          { type: 'text', content: ', dealing ' },
          { type: 'value', content: '70%' },
          { type: 'text', content: ' damage to all enemies every ' },
          { type: 'value', content: '0.5s' },
          {
            type: 'text',
            content:
              ' and knocking them all back. At the same time, Lucifer transforms into a Fallen Angel.',
          },
          { type: 'line-break', content: '' },
          { type: 'text', content: 'As a ' },
          { type: 'status', content: 'Fallen Angel' },
          { type: 'text', content: ', Lucifer also removes ' },
          { type: 'value', content: '30' },
          { type: 'text', content: ' Energy from the every enemy hit.' },
        ],
        lv2: 'Deals 75% damage',
        lv3: 'Removes 40 Energy every hit',
        lv4: 'Deals 80% damage',
      },
    },
    'skill two': {
      type: 'Passive',
      name: 'Fallen Flames',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'After 2 auto-attacks, Lucifer enchants his sword with flame and slashes the target to deal ',
          },
          { type: 'value', content: '2x 200%' },
          {
            type: 'text',
            content:
              ' damage. The flames also deal 50% damage to nearby enemies. As a ',
          },
          { type: 'status', content: 'Fallen Angel' },
          {
            type: 'text',
            content: ", Lucifer's sword will be enchanted with flames after ",
          },
          { type: 'value', content: 'every' },
          { type: 'text', content: ' auto-attack.' },
        ],
        lv2: 'Deals 210% damage',
        lv3: 'Deals 220% damage',
        lv4: 'Deals 230% damage',
      },
    },
    'skill three': {
      type: 'Passive',
      name: 'Imperious Glance',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              "Lucifer's Attack Energy Restoration and Hit Energy Restoration are increased by ",
          },
          { type: 'value', content: '20%' },
          { type: 'text', content: '.' },
        ],
        lv2: 'After using an active skill, increase Dodge by 8% for 5s. This effect can stack up to 3 times.',
        lv3: 'Attack Energy Restoration and Hit Energy Restoration increases by 30%.',
        lv4: 'Increases Dodge by 10%',
      },
    },
    'skill four': {
      type: 'Active',
      name: 'Fallen Stars',
      description: {
        lv1: [
          { type: 'text', content: 'Lucifer elevates into the air and fires ' },
          { type: 'value', content: '4' },
          { type: 'text', content: ' fallen stars, each dealing ' },
          { type: 'value', content: '140%' },
          {
            type: 'text',
            content:
              ' damage to 1 random enemy. During this time, Lucifer cannot be targeted.',
          },
          { type: 'line-break', content: '' },
          { type: 'text', content: 'As ' },
          { type: 'status', content: 'Fallen Angel' },
          { type: 'text', content: ', Lucifer also stuns the target for ' },
          { type: 'value', content: '0.1s' },
          { type: 'text', content: '.' },
        ],
        lv2: 'As Fallen Angel, Lucifer also stuns hit target for 0.5s',
        lv3: 'Deals 160% damage',
        lv4: 'Fires 5x fallen stars',
      },
    },
  },
  Iset: {
    ultimate: {
      type: 'Ultimate',
      name: 'Revival Ritual',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              "Iset chant for a revival ankh. If there isn't one in the battlefield already, one will be generated after her spell is complete. If there is already a revival ankh, Iset will increase her Attack by ",
          },
          { type: 'value', content: '20%' },
          {
            type: 'text',
            content:
              ' after the chant is completed instead (the effect is stackable). If her chanting is interrupted, ',
          },
          { type: 'value', content: '500' },
          { type: 'text', content: ' energy will be returned to her.' },
          { type: 'line-break', content: '' },
          {
            type: 'text',
            content:
              'When an allied Hero is about to die, they will consume the ankh to revive themselves after ',
          },
          { type: 'value', content: '6s' },
          { type: 'text', content: ', recovering ' },
          { type: 'value', content: '36%' },
          { type: 'text', content: ' of their Health.' },
        ],
        lv2: 'Additionally, Iset is immune to control effects for the 2s while she chants',
        lv3: 'Increases Health recovered upon revival to 48%',
        lv4: "Increases the amount of Iset's Attack boost to 25%",
      },
    },
    'skill two': {
      type: 'Active',
      name: 'Ode to Sorcery',
      description: {
        lv1: [
          { type: 'text', content: 'Iset causes all allies to gain ' },
          { type: 'value', content: '10%' },
          { type: 'text', content: ' of her Attack for ' },
          { type: 'value', content: '8s' },
          {
            type: 'text',
            content: '. Every second of this time, Iset restores ',
          },
          { type: 'value', content: '20%' },
          {
            type: 'text',
            content: ' of the Energy gained by these Heroes to herself.',
          },
        ],
        lv2: "Allies increase their Attack by 12.5% of Iset's Attack",
        lv3: "Increases Iset's Energy restored to 25% of allies' amount gained",
        lv4: "Allies increase their Attack by 15% of Iset's Attack",
      },
    },
    'skill three': {
      type: 'Active',
      name: 'Purifying Incantation',
      description: {
        lv1: [
          { type: 'text', content: 'Iset removes all debuffs on ' },
          { type: 'value', content: '2' },
          { type: 'text', content: ' random ally Heroes. For ' },
          { type: 'value', content: '4s' },
          {
            type: 'text',
            content:
              ' afterwards targets are immune to debuffs and damage taken is reduced by ',
          },
          { type: 'value', content: '15%' },
          { type: 'text', content: '.' },
        ],
        lv2: 'Increases duration of effects to 5s',
        lv3: 'Reduced allies damage taken by 20% for the duration',
        lv4: 'Increases duration of effects to 6s',
      },
    },
    'skill four': {
      type: 'Passive',
      name: 'Balanced Clock',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'At the beginning of the battle, Iset sets a clock in front of her. Every ',
          },
          { type: 'value', content: '15s' },
          {
            type: 'text',
            content:
              ', this device will cause additional damage to all enemy units equal to ',
          },
          { type: 'value', content: '12%' },
          {
            type: 'text',
            content:
              ' of their own damage taken during that period. This additional damage is True Damage.',
          },
        ],
        lv2: 'Increases True Damage dealt to 14%',
        lv3: 'Increases True Damage dealt to 16%',
        lv4: 'Increases True Damage dealt to 18%',
      },
    },
  },
  Typhon: {
    ultimate: {
      type: 'Ultimate',
      name: 'Chaos Storm',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              "Typhon invokes a Chaos Storm, increasing all allies' Attack by ",
          },
          { type: 'value', content: '20%' },
          { type: 'text', content: ' and Attack Speed by ' },
          { type: 'value', content: '20%' },
          { type: 'text', content: ' for ' },
          { type: 'value', content: '8s' },
          {
            type: 'text',
            content: '. During the same time, the skill removes ',
          },
          { type: 'value', content: '5%' },
          {
            type: 'text',
            content:
              " of all allies' current Health per second as True Damage. These effects cannot be dispersed.",
          },
        ],
        lv2: 'Increases Attack by 25%',
        lv3: 'Increases Attack Speed by 30%',
        lv4: 'Increases Attack by 30%',
      },
    },
    'skill two': {
      type: 'Active',
      name: 'Snake Flurry',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Typhon throws demon snakes at up to 3 random targets, each dealing damage equal to ',
          },
          { type: 'value', content: '100%' },
          {
            type: 'text',
            content:
              " of Typhon's Attack. Depending on the snake's color, it will also inflict a unique debuff.",
          },
          { type: 'line-break', content: '' },
          { type: 'line-break', content: '' },
          {
            type: 'text',
            content: "Red snake: Reduced the target's Defense by ",
          },
          { type: 'value', content: '16%' },
          { type: 'text', content: ' for 15s.' },
          { type: 'line-break', content: '' },
          {
            type: 'text',
            content: "Green snake: Reduces the target's healing by ",
          },
          { type: 'value', content: '12%' },
          { type: 'text', content: ' for 15s.' },
          { type: 'line-break', content: '' },
          {
            type: 'text',
            content: "Blue snake: Reduces the target's Dodge by ",
          },
          { type: 'value', content: '8%' },
          { type: 'text', content: ' for 15.' },
          { type: 'line-break', content: '' },
          { type: 'line-break', content: '' },
          {
            type: 'text',
            content: 'Each debuff effect can stack up to 3 times.',
          },
        ],
        lv2: 'Reduces Defense by 20%',
        lv3: 'Reduces Healing by 15%',
        lv4: 'Reduces Dodge by 10%',
      },
    },
    'skill three': {
      type: 'Passive',
      name: 'Monster King',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'After an ally dies, a demon snake of a random color is spawned from where they fell. The snake inherits ',
          },
          { type: 'value', content: '100%' },
          { type: 'text', content: " of all Typhon's Attributes but " },
          { type: 'value', content: '75%' },
          { type: 'text', content: ' of his max Health.' },
          { type: 'line-break', content: '' },
          { type: 'line-break', content: '' },
          { type: 'text', content: 'Red snake: A melee auto-attack deals ' },
          { type: 'value', content: '100%' },
          { type: 'text', content: ' damage to 1 target.' },
          { type: 'line-break', content: '' },
          { type: 'text', content: 'Green snake: A ranged auto-attack deals ' },
          { type: 'value', content: '50%' },
          { type: 'text', content: ' damage to 2 targets.' },
          { type: 'line-break', content: '' },
          { type: 'text', content: 'Blue snake: A melee auto-attack deals ' },
          { type: 'value', content: '100%' },
          { type: 'text', content: ' damage to 1 target.' },
        ],
        lv2: 'Additionally, whenever a snake\'s auto-attack deals a Crit, it adds 1 layer of "Snake Flurry" debuff to the target',
        lv3: 'Additionally, every 3 times it attacks, the snake recovers 5% of its max Health',
        lv4: 'Additionally, every 3 times it attacks, the snake recovers 8% of its max Health',
      },
    },
    'skill four': {
      type: 'Passive',
      name: 'Titan Shield',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'At the beginning of the battle, Typhon generates a Titan Shield that lasts the entire battle. The shield can withstand damage equal to ',
          },
          { type: 'value', content: '50%' },
          {
            type: 'text',
            content:
              " of Typhon's max Health. When the Titan Shield is destroyed, it will deal ",
          },
          { type: 'value', content: '15%' },
          {
            type: 'text',
            content: " of Typhon's max Health as True Damage to all enemies.",
          },
        ],
        lv2: "Additionally, increase Typhon's Defense by 100%",
        lv3: "Additionally, increase Typhon's Defense by 125%",
        lv4: "Additionally, increase Typhon's Defense by 150%",
      },
    },
  },
  Lilith: {
    ultimate: {
      type: 'Ultimate',
      name: 'Dual Shadows',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'If allies Guardian > Shadowarch, Lilith wears a human mask. If allies Shadowarch > Guardian, she wears a demon mask. If equal, a random mask. ',
          },
          { type: 'status', content: 'In human mask' },
          { type: 'text', content: ', she deals ' },
          { type: 'value', content: '550%' },
          {
            type: 'text',
            content:
              " damage to 1 enemy. If the target is killed, the extra damage will be dealt to all other enemies (damage ignores enemies' Defense). ",
          },
          { type: 'status', content: 'In demon mask' },
          { type: 'text', content: ', she deals ' },
          { type: 'value', content: '325%' },
          {
            type: 'text',
            content:
              ' damage to all enemies. If no target is killed, an additional ',
          },
          { type: 'value', content: '325%' },
          { type: 'text', content: ' damage will be dealt to a random enemy.' },
        ],
        lv2: 'Human mask: Deals 590% damage; Demon Mask: Deals 350% damage',
        lv3: 'Human mask: Deals 630% damage; Demon Mask: Deals 375% damage',
        lv4: 'Human mask: Deals 670% damage; Demon Mask: Deals 400% damage',
      },
    },
    'skill two': {
      type: 'Active',
      name: 'Shadow Lightning',
      description: {
        lv1: [
          { type: 'text', content: 'When Lilith wears a ' },
          { type: 'status', content: 'human mask' },
          {
            type: 'text',
            content: ', she turns into a shadow and deals 3 waves of ',
          },
          { type: 'value', content: '100%' },
          { type: 'text', content: ' damage to 1 enemy; when she wears the ' },
          { type: 'status', content: 'demon mask' },
          {
            type: 'text',
            content: ', she teleports between 3 enemies and deals ',
          },
          { type: 'value', content: '150%' },
          { type: 'text', content: ' damage to each' },
        ],
        lv2: 'Additionally, with the human mask, recovers 5% of max Health; with the demon mask, stuns the target for 1s',
        lv3: 'With the human mask, deals 110% damage; with the demon mask, deals 160% damage to each target',
        lv4: 'With the human mask, deals 120% damage; with the demon mask, deals 170% damage to each target',
      },
    },
    'skill three': {
      type: 'Active',
      name: 'Dark Ritual',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Lilith begins a ritual 5s after the start of the battle. If she wears a ',
          },
          { type: 'status', content: 'human mask' },
          { type: 'text', content: ', she absorbs ' },
          { type: 'value', content: '5%' },
          { type: 'text', content: ' of the Attack and ' },
          { type: 'value', content: '50' },
          {
            type: 'text',
            content:
              " Energy from all allies but increases all allies' Defense by ",
          },
          { type: 'value', content: '25%' },
          { type: 'text', content: '. If she wears the ' },
          { type: 'status', content: 'demon mask' },
          { type: 'text', content: ', it absorbs ' },
          { type: 'value', content: '7%' },
          { type: 'text', content: " of allies' Attack and takes " },
          { type: 'value', content: '75' },
          { type: 'text', content: ' Energy from each' },
        ],
        lv2: 'With the demon mask, release the same skill 15s after the start of the battle',
        lv3: 'With the human mask, absorbs 8% of the Attack from all allies but increases Defense by 30%',
        lv4: 'With the human mask, absorbs 60 Energy from all allies; with the demon mask, 90 Energy from all allies',
      },
    },
    'skill four': {
      type: 'Passive',
      name: 'Dual Masks',
      description: {
        lv1: [
          { type: 'text', content: 'When Lilith wears the ' },
          { type: 'status', content: 'human mask' },
          { type: 'text', content: ', her Crit Chance increases by ' },
          { type: 'value', content: '30%' },
          { type: 'text', content: '; when she wears a ' },
          { type: 'status', content: 'demon mask' },
          { type: 'text', content: ', her Lifesteal increases by ' },
          { type: 'value', content: '30%' },
          { type: 'text', content: '.' },
        ],
        lv2: 'Additionally, with the human mask, her Attack Energy Restoration increases by 20%; with the demon mask, her Attack Speed increases by 20%',
        lv3: 'With the human mask, her Crit Chance increases by 35%; with the demon mask, her Lifesteal increases by 35%',
        lv4: 'Additionally, with the human mask, her Attack Energy Restoration increases by 30%; with the demon mask, her Attack Speed increases by 30%',
      },
    },
  },
  Nuwa: {
    ultimate: {
      type: 'Ultimate',
      name: 'Mend the Sky',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Nuwa mends the sky with the Five-Colored Stone and boosts herself and ally Heroes with distinct effect based on their Hero types for ',
          },
          { type: 'value', content: '7s' },
          { type: 'text', content: '.' },
          { type: 'line-break', content: '' },
          { type: 'line-break', content: '' },
          { type: 'text', content: 'Brown (Nuwa): Increases Attack Speed by ' },
          { type: 'value', content: '50%' },
          { type: 'text', content: '.' },
          { type: 'line-break', content: '' },
          { type: 'text', content: 'Red (Tank): Recovers ' },
          { type: 'value', content: '6%' },
          { type: 'text', content: ' of max Health every second.' },
          { type: 'line-break', content: '' },
          { type: 'text', content: 'Yellow (Fighter): Increases Attack by ' },
          { type: 'value', content: '30%' },
          { type: 'text', content: '.' },
          { type: 'line-break', content: '' },
          {
            type: 'text',
            content: 'Blue (Mage): Increases Crit Chance and Crit Damage by ',
          },
          { type: 'value', content: '30%' },
          { type: 'text', content: '.' },
          { type: 'line-break', content: '' },
          { type: 'text', content: 'Green (Support): Restores ' },
          { type: 'value', content: '30' },
          { type: 'text', content: ' Energy every second.' },
        ],
        lv2: 'This effect lasts for 8s',
        lv3: 'This effect lasts for 9s',
        lv4: 'This effect lasts for 10s',
      },
    },
    'skill two': {
      type: 'Passive',
      name: 'Five-Colored Stones',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              "At the bginning of battle, Nuwa syncs her five stones' colors to match her allies' Hero types and gains a battle bonus based on these colors (bonuses are stackable).",
          },
          { type: 'line-break', content: '' },
          { type: 'line-break', content: '' },
          { type: 'text', content: 'Brown (Nuwa): Increases max Health by ' },
          { type: 'value', content: '20%' },
          { type: 'text', content: '.' },
          { type: 'line-break', content: '' },
          { type: 'text', content: 'Red (Tank): Increases Attack by ' },
          { type: 'value', content: '10%' },
          { type: 'text', content: '.' },
          { type: 'line-break', content: '' },
          { type: 'text', content: 'Yellow (Fighter): Increases Dodge by ' },
          { type: 'value', content: '10%' },
          { type: 'text', content: '.' },
          { type: 'line-break', content: '' },
          { type: 'text', content: 'Blue (Mage): Increases Defense by ' },
          { type: 'value', content: '30%' },
          { type: 'text', content: '.' },
          { type: 'line-break', content: '' },
          { type: 'text', content: 'Green (Support): Increases Crit Chance ' },
          { type: 'value', content: '10%' },
          { type: 'text', content: '.' },
        ],
        lv2: 'Brown: Increases max Health by 25%',
        lv3: 'Brown: Increases max Health by 30%',
        lv4: 'Brown: Increases max Health by 35%',
      },
    },
    'skill three': {
      type: 'Active',
      name: 'Pillar of the Sky',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Nuwa summons a Sky Pillar to remove a random enemy for 3s. An extra bonus will be added according to the color of the Stone when the skill is cast.',
          },
          { type: 'line-break', content: '' },
          { type: 'line-break', content: '' },
          { type: 'text', content: 'Brown (Nuwa): Deals ' },
          { type: 'value', content: '100%' },
          { type: 'text', content: ' damage.' },
          { type: 'line-break', content: '' },
          { type: 'text', content: 'Red (Tank): Deals ' },
          { type: 'value', content: '50%' },
          { type: 'text', content: ' damage to enemies near the target.' },
          { type: 'line-break', content: '' },
          {
            type: 'text',
            content: 'Yellow (Fighter): Stuns enemies near the target for ',
          },
          { type: 'value', content: '0.75s' },
          { type: 'text', content: '.' },
          { type: 'line-break', content: '' },
          {
            type: 'text',
            content: 'Blue (Mage): the Sky Pillar lasts for an extra ',
          },
          { type: 'value', content: '2s' },
          { type: 'text', content: '.' },
          { type: 'line-break', content: '' },
          { type: 'text', content: 'Green (Support): Deals ' },
          { type: 'value', content: '50%' },
          { type: 'text', content: ' extra damage.' },
        ],
        lv2: 'Brown: Deals 120% damage',
        lv3: 'Brown: Deals 140% damage',
        lv4: 'Brown: Deals 160% damage',
      },
    },
    'skill four': {
      type: 'Passive',
      name: 'Lustrous Land',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              "Nuwa's Five-Colored Stones will cycle through the colors every auto-attack, producing a different bonus for the next auto-attack.",
          },
          { type: 'line-break', content: '' },
          { type: 'line-break', content: '' },
          { type: 'text', content: 'Brown (Nuwa): Removes ' },
          { type: 'value', content: '100' },
          { type: 'text', content: ' Energy from the target.' },
          { type: 'line-break', content: '' },
          { type: 'text', content: 'Red (Tank): Attack ' },
          { type: 'value', content: '3' },
          { type: 'text', content: ' enemies at the same time.' },
          { type: 'line-break', content: '' },
          { type: 'text', content: 'Yellow (Fighter): Stuns ' },
          { type: 'value', content: '2' },
          { type: 'text', content: ' targets at the same time for ' },
          { type: 'value', content: '0.5s' },
          { type: 'text', content: '.' },
          { type: 'line-break', content: '' },
          { type: 'text', content: 'Blue (Mage): Recovers ' },
          { type: 'value', content: '12%' },
          { type: 'text', content: ' of max Health for the weakest ally.' },
          { type: 'line-break', content: '' },
          { type: 'text', content: 'Green (Support): Deals ' },
          { type: 'value', content: '250%' },
          { type: 'text', content: ' damage.' },
        ],
        lv2: "Increases Nuwa's Attack Speed by 5%",
        lv3: "Increases Nuwa's Attack Speed by 10%",
        lv4: "Increases Nuwa's Attack Speed by 15%",
      },
    },
  },
  // ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // ----------------------------------------------- SSR -----------------------------------------------
  // ------------------------------------- LUMINARCH -------------------------------------
  Zeus: {
    ultimate: {
      type: 'Ultimate',
      name: 'Wrath of god',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Zeus draws in lightning energy to cast lightning bolts from the sky, dealing ',
          },
          { type: 'value', content: '360%' },
          { type: 'text', content: ' damage to all enemies.' },
        ],
        lv2: 'Deals 400% damage to all enemies',
        lv3: '35% chance of generating an additional lightning bol to strike a random target',
        lv4: 'Increases overall damage by 100% to summons/minions',
      },
    },
    'skill two': {
      type: 'Active',
      name: 'Lightning Chain',
      description: {
        lv1: [
          {
            type: 'text',
            content: 'Zeus throws a lightning spear. It can arc up to ',
          },
          { type: 'value', content: '3' },
          { type: 'text', content: ' enemies, dealing ' },
          { type: 'value', content: '130%' },
          { type: 'text', content: ' damage to each one.' },
        ],
        lv2: 'Arcs to 4 enemies',
        lv3: 'Deals 150% damage',
        lv4: 'Reduces skill cooldown by 1s',
      },
    },
    'skill three': {
      type: 'Active',
      name: 'Voltic Shield',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Zeus creates a Voltic Shield for the ally Hero with the lowest Health. The shield absorbs damage equal to ',
          },
          { type: 'value', content: '110%' },
          { type: 'text', content: " of Zeus' Attack and lasts for " },
          { type: 'value', content: '5s' },
          { type: 'text', content: '. If the shield is destroyed, it deals ' },
          { type: 'value', content: '100%' },
          { type: 'text', content: ' damage to all nearby enemies.' },
        ],
        lv2: "Absorbs damage equal to 130% of Zeus' Attack",
        lv3: 'Deals 130% damage when destroyed',
        lv4: "Absorbs damage equal to 150% of Zeus' Attack",
      },
    },
    'skill four': {
      type: 'Passive',
      name: 'Static Field',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'When Zeus hits an enemy with any skill, deals additional lightning damage equal to ',
          },
          { type: 'value', content: '5%' },
          { type: 'text', content: " of the enemy's current Health. " },
          {
            type: 'warning',
            content: 'This damage is treated as True Damage.',
          },
        ],
        lv2: "Deals damage equal to 6% of the enemy's current Health",
        lv3: "Deals damage equal to 7% of the enemy's current Health",
        lv4: "If target's Health is >90%, damage dealt is doubled",
      },
    },
  },
  Athena: {
    ultimate: {
      type: 'Ultimate',
      name: 'Aegis of Light',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Athena beckons Holy Light to generate shields for all allies which can absorb damage equal to ',
          },
          { type: 'value', content: '300%' },
          { type: 'text', content: " of Athena's Attack for " },
          { type: 'value', content: '8s' },
          { type: 'text', content: '.' },
        ],
        lv2: "Allies recover Health while the shield is active (recover 1.5% of the target's max Health every second)",
        lv3: "The shield absorbs damage equal to 350% of Athena's Attack",
        lv4: "Allies recover Health while the shield is active (recover 2% of the target's max Health every second)",
      },
    },
    'skill two': {
      type: 'Active',
      name: 'Victorious Pierce',
      description: {
        lv1: [
          {
            type: 'text',
            content: 'Athena throws the Spear of Victory, dealing ',
          },
          { type: 'value', content: '200%' },
          {
            type: 'text',
            content: ' damage to all enemies directly in front of her.',
          },
        ],
        lv2: 'For every target hit, Athena recovers 10% of her max Health',
        lv3: 'Deals 250% damage',
        lv4: 'For every target hit, Athena recovers 12% of her max Health',
      },
    },
    'skill three': {
      type: 'Active',
      name: 'Light of Athens',
      description: {
        lv1: [
          {
            type: 'text',
            content: 'Athena summons a beam of sunlight, dealing ',
          },
          { type: 'value', content: '130%' },
          {
            type: 'text',
            content:
              ' damage to the enemy with the highest Attack and stunning them for ',
          },
          { type: 'value', content: '2s' },
          { type: 'text', content: '.' },
        ],
        lv2: 'Deals 160% damage',
        lv3: 'Stuns enemy for 3s',
        lv4: 'Beam has 50% chance of targeting an additional enemy',
      },
    },
    'skill four': {
      type: 'Passive',
      name: 'Holy Protection',
      description: {
        lv1: [
          { type: 'text', content: 'Aegis blocks all damage to Athena for ' },
          { type: 'value', content: '2s' },
          { type: 'text', content: ', reducing it to ' },
          { type: 'value', content: '1' },
          {
            type: 'text',
            content:
              ". During this time, increase Athena's Hit Energy Restoration by ",
          },
          { type: 'value', content: '50%' },
          {
            type: 'text',
            content: '. This effect can only be used once every ',
          },
          { type: 'value', content: '8s' },
          { type: 'text', content: '.' },
        ],
        lv2: 'Blocks damage for 2.25s',
        lv3: 'Hit Energy Recovery increases by 75%',
        lv4: 'Blocks damage for 2.5s',
      },
    },
  },
  Susanoo: {
    ultimate: {
      type: 'Ultimate',
      name: 'Phantom Fury',
      description: {
        lv1: [
          {
            type: 'text',
            content: 'Susanoo turns into a shadow and delivers ',
          },
          { type: 'value', content: '7' },
          {
            type: 'text',
            content: ' consecutive slashes to the target, dealing ',
          },
          { type: 'value', content: '90%' },
          {
            type: 'text',
            content:
              ' damage each time. During this time, Susanoo cannot be targeted.',
          },
        ],
        lv2: 'Deals 95% damage',
        lv3: 'Deals 100% damage',
        lv4: 'Deals 105% damage',
      },
    },
    'skill two': {
      type: 'Active',
      name: 'Phantom Slash',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'When the battle starts, Susanoo blinks to the enemy Hero directy across from him in the formation, dealing ',
          },
          { type: 'value', content: '350%' },
          { type: 'text', content: ' damage and stunning the target for ' },
          { type: 'value', content: '3s' },
          { type: 'text', content: '.' },
        ],
        lv2: 'Deals 375% damage',
        lv3: 'Stuns the target for 4s',
        lv4: 'Deals 400% damage',
      },
    },
    'skill three': {
      type: 'Passive',
      name: 'Precision Strike',
      description: {
        lv1: [
          { type: 'text', content: 'Susanoo increases Crit Chance by ' },
          { type: 'value', content: '25%' },
          {
            type: 'text',
            content:
              ". Additionally, every Crit will increase Susanoo's Attack Speed by ",
          },
          { type: 'value', content: '50%' },
          { type: 'text', content: ' for ' },
          { type: 'value', content: '10s' },
          { type: 'text', content: '. This effect can stack ' },
          { type: 'value', content: '3' },
          { type: 'text', content: ' times.' },
        ],
        lv2: 'Increases Crit Chance by 30%',
        lv3: "Recovers 20% of Susanoo's current missing Health for every Crit",
        lv4: 'Increases Attack Speed by 75% for every Crit',
      },
    },
    'skill four': {
      type: 'Active',
      name: 'Tempest Blade',
      description: {
        lv1: [
          { type: 'text', content: 'Susanoo slashes 4 times, dealing ' },
          { type: 'value', content: '70%' },
          {
            type: 'text',
            content: ' damage each hit and knocking back the target.',
          },
        ],
        lv2: 'Deals 75% damage',
        lv3: 'This skill cannot be dodged',
        lv4: 'Deals 80% damage',
      },
    },
  },
  Artemis: {
    ultimate: {
      type: 'Ultimate',
      name: 'Crescent Arrow',
      description: {
        lv1: [
          {
            type: 'text',
            content: 'Artemis invokes the power of moonlight and shoots ',
          },
          { type: 'value', content: '10' },
          {
            type: 'text',
            content: ' arrows at random targets in an area, dealing ',
          },
          { type: 'value', content: '90%' },
          {
            type: 'text',
            content: ' damage per hit and stunning the targets for ',
          },
          { type: 'value', content: '1s' },
          { type: 'text', content: '.' },
        ],
        lv2: 'Increases damage to 95%',
        lv3: 'Stuns targets for 1.5s',
        lv4: 'Increases damage to 100%',
      },
    },
    'skill two': {
      type: 'Active',
      name: 'Lunar Strike',
      description: {
        lv1: [
          { type: 'text', content: 'Artemis deals ' },
          { type: 'value', content: '250%' },
          {
            type: 'text',
            content:
              ' damage to the closest enemy Hero, knocking them back and stunning them for ',
          },
          { type: 'value', content: '3s' },
          { type: 'text', content: '.' },
        ],
        lv2: 'Additionally, increase her Attack Speed by 25% for 5s',
        lv3: 'Increases damage to 275%',
        lv4: 'Increases damage to 300%',
      },
    },
    'skill three': {
      type: 'Passive',
      name: 'Full Moon',
      description: {
        lv1: [
          { type: 'text', content: 'For every ' },
          { type: 'value', content: '500' },
          {
            type: 'text',
            content:
              ' units of distance between Artemis and her target, increase the damage dealt by ',
          },
          { type: 'value', content: '2%' },
          { type: 'text', content: '.' },
        ],
        lv2: 'Increases damage dealt to 2.2%',
        lv3: 'Increases damage dealt to 2.4%',
        lv4: 'Increases damage dealt to 2.6%',
      },
    },
    'skill four': {
      type: 'Active',
      name: 'Moonlit Arrow',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Artemis fires a volley of arrows at her target and nearby enemies, dealing 9x ',
          },
          { type: 'value', content: '36%' },
          { type: 'text', content: ' damage.' },
        ],
        lv2: 'After enemy is hit, they gain a "weak point", increasing their vulnerability to a Crit by 10%',
        lv3: 'Increases damage to 40%',
        lv4: 'Increases damage to 44%',
      },
    },
  },
  Dionysus: {
    ultimate: {
      type: 'Ultimate',
      name: 'Drunken',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Dionysus applies the debuff "Drunken" to the enemy target with the highest Health, reducing their Attack Speed by ',
          },
          { type: 'value', content: '70%' },
          { type: 'text', content: ' for ' },
          { type: 'value', content: '6s' },
          { type: 'text', content: '.' },
        ],
        lv2: "Reduces target's Attack Speed by 80%",
        lv3: 'Lasts for 8s',
        lv4: "Reduces target's Attack Speed by 90%",
      },
    },
    'skill two': {
      type: 'Active',
      name: 'Mis of Wine',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Dionysus releases "Mist of Wine" in front of him to deal ',
          },
          { type: 'value', content: '100%' },
          {
            type: 'text',
            content:
              " damage to the targets within the area. After, enemies' Accuracy also decreases by ",
          },
          { type: 'value', content: '30%' },
          { type: 'text', content: ' for ' },
          { type: 'value', content: '6s' },
          { type: 'text', content: '.' },
        ],
        lv2: 'Additionally, reduces enemy Attack by 10%',
        lv3: 'Reduces enemy Accuracy by 40%',
        lv4: 'Reduces enemy Attack by 15%',
      },
    },
    'skill three': {
      type: 'Active',
      name: 'Chronic Poison',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Dionysus targets a random frontline enemy with the debuff "Poisonous Wine", causing ',
          },
          { type: 'value', content: '50%' },
          { type: 'text', content: ' damage per second for ' },
          { type: 'value', content: '6s' },
          {
            type: 'text',
            content:
              '. If Attack from the inflicted is dodged, target will suffer damage equal to ',
          },
          { type: 'value', content: '2%' },
          { type: 'text', content: ' of their current Health.' },
        ],
        lv2: 'Additionally, reduces healing received by the target by 25%',
        lv3: 'Deals 60% damage to the target every second',
        lv4: 'Additionally, reduces healing received by the target by 50%',
      },
    },
    'skill four': {
      type: 'Passive',
      name: 'Alcoholic',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'For every enemy afflicted with "Mist of Wine", "Poisonous Wine" or "Drunken", increase the Attack of backline allies by ',
          },
          { type: 'value', content: '4%' },
          { type: 'text', content: '.' },
        ],
        lv2: 'Additionally increases Dodge of backline allies by 4%',
        lv3: 'Increases Dodge of backline allies by 6%',
        lv4: 'Increases Attack of backline allies by 6%',
      },
    },
  },
  Thor: {
    ultimate: {
      type: 'Ultimate',
      name: 'Divine Descent',
      description: {
        lv1: [
          { type: 'text', content: 'Thor releases the power of thunder for ' },
          { type: 'value', content: '10s' },
          { type: 'text', content: ', increasing his Attack by ' },
          { type: 'value', content: '20%' },
          { type: 'text', content: ', Defense by ' },
          { type: 'value', content: '50%' },
          { type: 'text', content: ', and max Health by ' },
          { type: 'value', content: '50%' },
          {
            type: 'text',
            content:
              '. Auto-attacks will also extend beyond the target to enemies nearby, dealing ',
          },
          { type: 'value', content: '150%' },
          {
            type: 'text',
            content: " damage and reducing main target's Attack Speed by ",
          },
          { type: 'value', content: '30%' },
          { type: 'text', content: ' for ' },
          { type: 'value', content: '4s' },
          { type: 'text', content: '.' },
        ],
        lv2: 'Additionally, recovers 25% Health',
        lv3: 'Increases max Health to 60%',
        lv4: 'Additionally, recovers 30% Health',
      },
    },
    'skill two': {
      type: 'Active',
      name: 'Thunder Hammer',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Thor throws his hammer at the enemy with the highest Attack, dealing ',
          },
          { type: 'value', content: '150%' },
          { type: 'text', content: ' damage and stunning them for ' },
          { type: 'value', content: '1s' },
          { type: 'text', content: '.' },
        ],
        lv2: 'Deals 175% damage',
        lv3: 'Stuns the enemy for 2s',
        lv4: 'Deals 200% damage',
      },
    },
    'skill three': {
      type: 'Passive',
      name: 'Static Shield',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Thor casts a permanent shield on himself, reducing damage taken by ',
          },
          { type: 'value', content: '25%' },
          {
            type: 'text',
            content: '. Afterwards, whenever Thor is attacked, there is a ',
          },
          { type: 'value', content: '50%' },
          {
            type: 'text',
            content:
              ' chance that the shield releases a counterstrike lightning bolt to deal ',
          },
          { type: 'value', content: '50%' },
          {
            type: 'text',
            content: ' damage. The bolt also reduces Attack Speed by ',
          },
          { type: 'value', content: '30%' },
          { type: 'text', content: ' for ' },
          { type: 'value', content: '4s' },
          {
            type: 'text',
            content: '. This effect can only be used once every ',
          },
          { type: 'value', content: '0.5s' },
          { type: 'text', content: '.' },
        ],
        lv2: 'Counterattack deals 65% damage',
        lv3: 'Reduces Attack Speed by 40%',
        lv4: 'Increases the chance of a lightning bolt to 65%',
      },
    },
    'skill four': {
      type: 'Active',
      name: 'Nordic Squall',
      description: {
        lv1: [
          { type: 'text', content: 'Thor spins with his hammer for ' },
          { type: 'value', content: '4s' },
          { type: 'text', content: ', dealing ' },
          { type: 'value', content: '50%' },
          {
            type: 'text',
            content:
              ' damage to nearby enemies every second, and reducing his own damage taken by ',
          },
          { type: 'value', content: '65%' },
          { type: 'text', content: '.' },
        ],
        lv2: 'Reduces damage taken by 67.5%',
        lv3: 'Deals 65% damage per second',
        lv4: 'Reduces damage taken by 70%',
      },
    },
  },
  // ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // ------------------------------------- SHADOWARCH -------------------------------------
  Persephone: {
    ultimate: {
      type: 'Ultimate',
      name: 'Bitter Blossoms',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Persephone makes the field of Nether Flowers bloom, dealing ',
          },
          { type: 'value', content: '250%' },
          {
            type: 'text',
            content:
              ' damage to enemies within the area, and increasing the stacks of Nether Flowers by ',
          },
          { type: 'value', content: '1' },
          { type: 'text', content: '.' },
        ],
        lv2: 'Increasing the stacks of Nether Flowers by 2',
        lv3: 'Deals 275% damage',
        lv4: 'Deals 300% damage',
      },
    },
    'skill two': {
      type: 'Passive',
      name: 'Nether Flowers',
      description: {
        lv1: [
          {
            type: 'text',
            content: 'At the beginning of the battle, Persephone applies ',
          },
          { type: 'value', content: '1' },
          {
            type: 'text',
            content:
              " stack of Nether Flowers to the opponents' side. If the enemy auto-attacks, they will have a ",
          },
          { type: 'value', content: '75%' },
          { type: 'text', content: ' chance to take damage equal to ' },
          { type: 'value', content: '60%' },
          {
            type: 'text',
            content:
              " of Persephone's Attack, and their healing received is reduced by ",
          },
          { type: 'value', content: '50%' },
          {
            type: 'text',
            content:
              '. "Nether Flowers" changes as it is stacked. At 2 stacks, damage increases to ',
          },
          { type: 'value', content: '80%' },
          {
            type: 'text',
            content:
              '. At 3 stacks, the triggering chance of an auto-attack is increased to ',
          },
          { type: 'value', content: '100%' },
          { type: 'text', content: '.' },
        ],
        lv2: 'At 4 stacks of Nether Flowers: deals 35% more damage to enemies with Health less than 50%',
        lv3: 'Nether Flowers start at 2 stacks',
        lv4: 'At 5 stacks of Nether Flowers: deals 100% damage',
      },
    },
    'skill three': {
      type: 'Active',
      name: 'Nether Butterflies',
      description: {
        lv1: [
          {
            type: 'text',
            content: 'Persephone summons Nether butterflies, dealing ',
          },
          { type: 'value', content: '200%' },
          {
            type: 'text',
            content:
              ' damage to the enemy with the most buffs, and dispersing all buffs.',
          },
        ],
        lv2: 'Additionally, enemy target cannot receive any buff for 5s',
        lv3: 'Whenever a buff is dispersed, it deals 50% damage',
        lv4: 'Cannot receive any buff for 10s',
      },
    },
    'skill four': {
      type: 'Passive',
      name: 'Nether Protection',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Reduces physical damage taken by Persephone and allies by ',
          },
          { type: 'value', content: '25%' },
          { type: 'text', content: '.' },
        ],
        lv2: "Every stack of Nether Flowers increases all allies' Dodge by 3%",
        lv3: 'Reduces physical damage taken by 30%',
        lv4: "Every stack of Nether Flowers increases all allies' Dodge by 4%",
      },
    },
  },
  Izanami: {
    ultimate: {
      type: 'Ultimate',
      name: 'Breath of the Dead',
      description: {
        lv1: [
          {
            type: 'text',
            content: 'Izanami releases half of her Wandering Ghosts for ',
          },
          { type: 'value', content: '10s' },
          { type: 'text', content: ', dealing damage equal to ' },
          { type: 'value', content: '60%' },
          {
            type: 'text',
            content: ' of Attack + ([number of ghosts released] x ',
          },
          { type: 'value', content: '3%' },
          {
            type: 'text',
            content:
              ' of her Attack) per second to individual targets. At the end of the skill, she recovers Health equal to ',
          },
          { type: 'value', content: '50%' },
          {
            type: 'text',
            content:
              ' of the total damage dealt. Additionally, all Ghosts will return to Izanami.',
          },
        ],
        lv2: 'Additionally, gain 50% Lifesteal',
        lv3: 'deals damage equal to 65% of Attack + ([number of ghosts released] x 3% of her Attack) per second',
        lv4: 'deals damage equal to 70% of Attack + ([number of ghosts released] x 3% of her Attack) per second',
      },
    },
    'skill two': {
      type: 'Active',
      name: 'Specter Impact',
      description: {
        lv1: [
          {
            type: 'text',
            content: 'Izanami summons Wandering Ghosts to deal ',
          },
          { type: 'value', content: '200%' },
          {
            type: 'text',
            content: ' damage to enemies directly in front of her.',
          },
        ],
        lv2: 'For every target hit, Izanami has 50% chance to collect 1 Wandering Ghost(s)',
        lv3: 'Deals 250% damage',
        lv4: 'Izanami has 100% chance to collect 1 Wandering Ghost(s)',
      },
    },
    'skill three': {
      type: 'Active',
      name: 'Life Drain',
      description: {
        lv1: [
          { type: 'text', content: 'Izanami marks a new enemy, dealing ' },
          { type: 'value', content: '75%' },
          { type: 'text', content: ' damage every ' },
          { type: 'value', content: '0.5s' },
          { type: 'text', content: ' for ' },
          { type: 'value', content: '1.5s' },
          {
            type: 'text',
            content: ' to all marked enemies and recovering Health equal to ',
          },
          { type: 'value', content: '100%' },
          { type: 'text', content: ' of the total damage dealt.' },
        ],
        lv2: 'At the start of the skill, collect 1 Wandering Ghost from every marked enemy',
        lv3: 'Deals 80% damage',
        lv4: 'Deals 85% damage',
      },
    },
    'skill four': {
      type: 'Passive',
      name: 'Nether Enchantment',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              "Izanami's spirit forms a protective aura around her, reducing her damage taken by ",
          },
          { type: 'value', content: '10%' },
          {
            type: 'text',
            content:
              '. Additionally, each Wandering Ghost around her further reduces her damage taken by ',
          },
          { type: 'value', content: '4%' },
          { type: 'text', content: '. Izanami can attain a maximum of ' },
          { type: 'value', content: '5' },
          { type: 'text', content: ' Ghosts.' },
        ],
        lv2: 'Can obtain a maximum of 8 Wandering Ghosts',
        lv3: 'At the beginning of the battle, Izanami obtains 5 Wandering Ghosts',
        lv4: 'Can obtain a maximum of 10 Wandering Ghosts',
      },
    },
  },
  Hades: {
    ultimate: {
      type: 'Ultimate',
      name: 'Death Scythe',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Hades summons the Death Scythe to target the enemy with the lowest Health percentage, marking the target for ',
          },
          { type: 'value', content: '3s' },
          { type: 'text', content: ' and dealing ' },
          { type: 'value', content: '100%' },
          {
            type: 'text',
            content:
              " damage per second. If the market target's Health drops below ",
          },
          { type: 'value', content: '30%' },
          {
            type: 'text',
            content: ' during this period, they will be killed.',
          },
        ],
        lv2: 'Deals 110% damage',
        lv3: "If the market target's Health drops below 35%, kill the target",
        lv4: 'Deals 120% damage',
      },
    },
    'skill two': {
      type: 'Active',
      name: 'Hell Hound',
      description: {
        lv1: [
          { type: 'text', content: 'Hades summons a Hellhound that mirrors ' },
          { type: 'value', content: '50%' },
          { type: 'text', content: " of Hades' max Health and absorbs " },
          { type: 'value', content: '45%' },
          { type: 'text', content: ' of the damage taken by Hades.' },
        ],
        lv2: 'The Hellhound takes 50% of the damage taken by Hades upon himself',
        lv3: 'The Hellhound takes 55% of the damage taken by Hades upon himself',
        lv4: 'The Hellhound takes 60% of the damage taken by Hades upon himself',
      },
    },
    'skill three': {
      type: 'Active',
      name: 'Shadow Shield',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Hades casts a shadow shield on himself, absorbing damage equal to ',
          },
          { type: 'value', content: '175%' },
          { type: 'text', content: ' of his Attack.' },
        ],
        lv2: 'When the shield breaks, it deals 100% damage to nearby enemies',
        lv3: "Absorbs damage equal to 200% of Hades' Attack",
        lv4: 'Additionally, Hellhound gains the shield',
      },
    },
    'skill four': {
      type: 'Passive',
      name: 'Life Tap',
      description: {
        lv1: [
          { type: 'text', content: 'Hades deals damage equal to ' },
          { type: 'value', content: '1.3%' },
          { type: 'text', content: " of opponent's max Health every " },
          { type: 'value', content: '2s' },
          { type: 'text', content: ' to all enemies.' },
        ],
        lv2: 'Deals 1.4% damage',
        lv3: "Hades recovers 50% of the enemies' lost Health",
        lv4: 'Deals 1.5% damage',
      },
    },
  },
  Medusa: {
    ultimate: {
      type: 'Ultimate',
      name: 'Petrifying Glare',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Medusa uses her eyes, petrifying all enemies (facing in her direction) for ',
          },
          { type: 'value', content: '3s' },
          { type: 'text', content: '.' },
        ],
        lv2: 'Petrification lasts for 4s',
        lv3: 'Enemies facing away from Medusa have 505 reduced Attack Speed for 4s',
        lv4: 'Petrification lasts for 5s',
      },
    },
    'skill two': {
      type: 'Passive',
      name: 'Split Shots',
      description: {
        lv1: [
          {
            type: 'text',
            content: "Medusa's auto-attack targets multiple enemies, dealing ",
          },
          { type: 'value', content: '200%' },
          { type: 'text', content: ' damage to the primary target, and ' },
          { type: 'value', content: '100%' },
          { type: 'text', content: ' damage to ' },
          { type: 'value', content: '1' },
          { type: 'text', content: ' secondary target(s).' },
        ],
        lv2: 'Targets 2 secondary enemies',
        lv3: 'Deals 215% damage to the primary enemy target; 110% damage to secondary enemies',
        lv4: 'Deals 230% damage to the primary enemy target; 120% damage to secondary enemies',
      },
    },
    'skill three': {
      type: 'Passive',
      name: 'Arrows of Corruption',
      description: {
        lv1: [
          { type: 'text', content: "Medusa's auto-attack has a " },
          { type: 'value', content: '33%' },
          { type: 'text', content: ' chance to add ' },
          { type: 'value', content: '75%' },
          { type: 'text', content: ' Lifesteal.' },
        ],
        lv2: 'Increases Lifesteal to 105%',
        lv3: 'Increases the chance to 505',
        lv4: 'Increases Lifesteal to 135%',
      },
    },
    'skill four': {
      type: 'Active',
      name: 'Venomous Snake',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Medusa releases a poisonous snake to attack the enemy with the highest Energy, dealing ',
          },
          { type: 'value', content: '150%' },
          { type: 'text', content: ' damage and removing ' },
          { type: 'value', content: '30%' },
          { type: 'text', content: ' of Energy from the target.' },
        ],
        lv2: 'Deals 180% damage',
        lv3: "For every 10 Energy removed, increase Medusa's damage dealt by 1% for 10s",
        lv4: 'Removes 40% of Energy from the target',
      },
    },
  },
  Anubis: {
    ultimate: {
      type: 'Ultimate',
      name: 'Abyss Domination',
      description: {
        lv1: [
          {
            type: 'text',
            content: 'Anubis grows larger, increasing his max Health by ',
          },
          { type: 'value', content: '50%' },
          {
            type: 'text',
            content: ", and increasing his mummies' Attack Speed by ",
          },
          { type: 'value', content: '100%' },
          { type: 'text', content: ' for ' },
          { type: 'value', content: '8s' },
          { type: 'text', content: '.' },
        ],
        lv2: 'Additionally, recovers 60% of his max Health',
        lv3: 'Resets the Cooldown of "Mummy Commander" instantly',
        lv4: 'Lasts for 10s',
      },
    },
    'skill two': {
      type: 'Active',
      name: 'Underworld Balance',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'At the beginning of the battle, Anubis reduces the Crit Chance of the backline enemies by ',
          },
          { type: 'value', content: '20%' },
          { type: 'text', content: ' for ' },
          { type: 'value', content: '15s' },
          { type: 'text', content: '.' },
        ],
        lv2: 'Additionally, reduces the Crit Damage of backline enemies by 30% and increases the duration to 20s',
        lv3: 'Reduces the Crit Chance of backline enemies by 30%',
        lv4: 'Reduces the Crit Damage of backline enemies by 40%',
      },
    },
    'skill three': {
      type: 'Active',
      name: 'Mummy Commander',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Anubis summons mummies behind 2 random targets. The mummies have ',
          },
          { type: 'value', content: '100%' },
          { type: 'text', content: " of Anubis' attributes but only " },
          { type: 'value', content: '30%' },
          {
            type: 'text',
            content: ' of his Health. There can be a maximum of ',
          },
          { type: 'value', content: '4' },
          { type: 'text', content: ' mummies on the field at once.' },
        ],
        lv2: 'Additionally, every 5 times a mummy uses an auto-attack, Anubis recovers 0.5% of his maximum Health',
        lv3: 'Every 5 times a mummy uses an auto-attack, Anubis recovers 1% of his maximum Health. This effect can be stacked 10 times',
        lv4: 'Every 5 times a mummy attacks, the enemy is stunned for 1s',
      },
    },
    'skill four': {
      type: 'Passive',
      name: 'Mummy Guardian',
      description: {
        lv1: [
          { type: 'text', content: 'For every ' },
          { type: 'value', content: '1' },
          {
            type: 'text',
            content:
              ' mummy(ies) on the field, the damage taken by Anubis is reduced by ',
          },
          { type: 'value', content: '9%' },
          { type: 'text', content: '.' },
        ],
        lv2: "Additionally, reduce all ally Heroes' (besides Anubis) damage taken by 3%",
        lv3: 'For every mummy on the field, the damage taken by Anubis is reduced by 10%',
        lv4: "Reduce all ally Heroes's (besides Anubis) damage taken by 3.5%",
      },
    },
  },
  Hela: {
    ultimate: {
      type: 'Ultimate',
      name: 'Dark Synergy',
      description: {
        lv1: [
          { type: 'text', content: 'Hela creates a Dark Synergy totem for ' },
          { type: 'value', content: '6s' },
          { type: 'text', content: '. Every ' },
          { type: 'value', content: '2s' },
          {
            type: 'text',
            content:
              " during this time, she averages all allies' current Health percentage and recovers ",
          },
          { type: 'value', content: '2%' },
          { type: 'text', content: ' of their max Health.' },
        ],
        lv2: "Increases allies' Health recovery every 2s to 2.5%",
        lv3: 'Increases duration to 8s',
        lv4: "Increases allies' Health recovery every 2s to 3.5%",
      },
    },
    'skill two': {
      type: 'Active',
      name: 'Dark Cure',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Hela drains the Health of the enemy with the lowest current Defense, causing ',
          },
          { type: 'value', content: '100%' },
          { type: 'text', content: ' magical damage every second for ' },
          { type: 'value', content: '3s' },
          { type: 'text', content: ' and recovering ' },
          { type: 'value', content: '50%' },
          { type: 'text', content: ' of that amount to the ' },
          { type: 'value', content: '2' },
          {
            type: 'text',
            content:
              ' allies with the lowest Health (within a certain range of her).',
          },
        ],
        lv2: 'Increases damage per second to 110%',
        lv3: 'Increases damage per second to 120%',
        lv4: 'Increases damage per second to 130%',
      },
    },
    'skill three': {
      type: 'Active',
      name: 'Foul Essence',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'At the beginning of the battle, Hela creates a circle around herself for ',
          },
          { type: 'value', content: '15s' },
          {
            type: 'text',
            content:
              '. Enemies within this circle, reduce their Attack Speed by ',
          },
          { type: 'value', content: '30%' },
          {
            type: 'text',
            content:
              '; allies within this circle, reduce their damage taken by ',
          },
          { type: 'value', content: '30%' },
          { type: 'text', content: '.' },
        ],
        lv2: 'Increases duration to 20s',
        lv3: "Reduces enemy's Attack Speed by 35%",
        lv4: "Reduces allies' damage taken by 35%",
      },
    },
    'skill four': {
      type: 'Passive',
      name: 'Blood Stained',
      description: {
        lv1: [
          {
            type: 'text',
            content: "Increases Hela and her allies' Lifesteal by ",
          },
          { type: 'value', content: '15%' },
          { type: 'text', content: '.' },
        ],
        lv2: "Additionally, increase Hela and her allies' Health recovery effects by 12%",
        lv3: "Increases Hela and her allies' Lifesteal by 20%",
        lv4: "Increases Hela and her allies' Health recovery effect by 18%",
      },
    },
  },
  // ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // ------------------------------------- GUARDIAN -------------------------------------
  Hercules: {
    ultimate: {
      type: 'Ultimate',
      name: 'Mortal Strike',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Hercules launches himself into the air before striking the ground with his weapon, dealing ',
          },
          { type: 'value', content: '240%' },
          {
            type: 'text',
            content:
              ' damage to nearby enemies and knocking them into air. After landing, they are stunned briefly and their Attack is reduced by ',
          },
          { type: 'value', content: '20%' },
          { type: 'text', content: ' for ' },
          { type: 'value', content: '8s' },
          { type: 'text', content: '.' },
        ],
        lv2: "Additionally, decreases Hercules' damage taken by 50% for 8s",
        lv3: 'Attack deals 270% damage',
        lv4: 'Attack deals 300% damage',
      },
    },
    'skill two': {
      type: 'Passive',
      name: 'Sword Storm',
      description: {
        lv1: [
          { type: 'text', content: 'After being hit, Hercules has a ' },
          { type: 'value', content: '25%' },
          {
            type: 'text',
            content: ' chance of triggering a counterattack that deals ',
          },
          { type: 'value', content: '75%' },
          {
            type: 'text',
            content: ' damage to nearby enemies. After, he also recovers ',
          },
          { type: 'value', content: '1.5%' },
          { type: 'text', content: ' of max Health every second for ' },
          { type: 'value', content: '3s' },
          { type: 'text', content: '.' },
        ],
        lv2: 'Health recovery effect can be stacked 2 times',
        lv3: 'Counterattack chance increases to 30%',
        lv4: 'Recovers 2% of max Health every second',
      },
    },
    'skill three': {
      type: 'Active',
      name: 'Provoke',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Hercules provokes enemies around him, forcing the targets to auto-attack Hercules for ',
          },
          { type: 'value', content: '4s' },
          {
            type: 'text',
            content: '. While "Provoke" is active, reduce all damage taken by ',
          },
          { type: 'value', content: '50%' },
          { type: 'text', content: '.' },
        ],
        lv2: 'Reduces damage taken by Hercules by 55%',
        lv3: 'Reduces damage taken by Hercules by 60%',
        lv4: '"Provoke" lasts for 5s',
      },
    },
    'skill four': {
      type: 'Active',
      name: 'Brutal Charge',
      description: {
        lv1: [
          {
            type: 'text',
            content: 'At the beginning of the battle, Hercules deals ',
          },
          { type: 'value', content: '200%' },
          {
            type: 'text',
            content: ' damage, knocking back the enemy and stunning them for ',
          },
          { type: 'value', content: '4s' },
          { type: 'text', content: '.' },
        ],
        lv2: 'Deals 250% damage',
        lv3: 'Increases the knock back distance',
        lv4: 'Stuns the target for 5s',
      },
    },
  },
  'Lu Bu': {
    ultimate: {
      type: 'Ultimate',
      name: 'Fearless Strike',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Lu Bu charges to a target and knocks them into the air, then continues to strike, dealing 12x ',
          },
          { type: 'value', content: '55%' },
          { type: 'text', content: ' damage.' },
        ],
        lv2: 'Deals 60% damage per strike',
        lv3: 'Deals 65% damage per strike',
        lv4: 'Deals 70% damage per strike',
      },
    },
    'skill two': {
      type: 'Passive',
      name: 'Force of Tiger',
      description: {
        lv1: [
          { type: 'text', content: 'After ' },
          { type: 'value', content: '2' },
          {
            type: 'text',
            content:
              ' auto-attacks, Lu Bu strikes the enemy with consecutive hits, dealing 3x ',
          },
          { type: 'value', content: '60%' },
          { type: 'text', content: ' damage. The fourth hit deals ' },
          { type: 'value', content: '150%' },
          { type: 'text', content: ' damage.' },
        ],
        lv2: 'The last hit is treated as True Damage',
        lv3: 'Lu Bu is immune to control during this time',
        lv4: 'The last strike deals 175% damage',
      },
    },
    'skill three': {
      type: 'Passive',
      name: 'Unbent Heart',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'When Lu Bu loses a certain amount of Health, he gains a buff of Physical Resistance up to ',
          },
          { type: 'value', content: '50%' },
          { type: 'text', content: ', and Lifesteal up to ' },
          { type: 'value', content: '50%' },
          { type: 'text', content: '.' },
        ],
        lv2: 'Gains a maximum of 60% Lifesteal',
        lv3: 'Gains a maximum of 60% Physical Resistance',
        lv4: 'Gains a maximum of 65% Lifesteal',
      },
    },
    'skill four': {
      type: 'Active',
      name: 'Halfmoon Slash',
      description: {
        lv1: [
          {
            type: 'text',
            content: 'Lu Bu strikes with his halberd, dealing 2x ',
          },
          { type: 'value', content: '200%' },
          { type: 'text', content: ' damage to the enemies in front of him.' },
        ],
        lv2: 'Deals 225% damage',
        lv3: 'Deals 250% damage',
        lv4: 'This attack cannot be dodged',
      },
    },
  },
  'Ganjiang & Moye': {
    ultimate: {
      type: 'Ultimate',
      name: 'Twin Souls',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Moye beckons her partner Ganjiang; switching from Moye to Ganjiang recovers ',
          },
          { type: 'value', content: '40%' },
          { type: 'text', content: ' of max Health and deals 2x ' },
          { type: 'value', content: '200%' },
          {
            type: 'text',
            content:
              ' damage to all enemies. This attack cannot be blocked/dodged. This Ultimate can only be used 1 time(s) per battle.',
          },
        ],
        lv2: 'Recovers 455 of max Health',
        lv3: 'Deals 225% damage',
        lv4: 'The Ultimate can be used while being controlled. Additionally, disperse all debuffs on Ganjiang',
      },
    },
    'skill two': {
      type: 'Passive',
      name: 'Illusion Blades',
      description: {
        lv1: [
          {
            type: 'text',
            content: 'As Moye, Ganjiang sword swirls around her and deals ',
          },
          { type: 'value', content: '60%' },
          {
            type: 'text',
            content:
              ' damage to enemies within range. As Ganjiang, Moye sword fires at the 3 closest enemies to deal ',
          },
          { type: 'value', content: '120%' },
          { type: 'text', content: ' damage to each.' },
        ],
        lv2: 'As Moya, Ganjiang sword deals 65% damage; as Ganjiang, Moye sword deals 130% damage to each',
        lv3: 'As Moya, Ganjiang sword deals 70% damage; as Ganjiang, Moye sword deals 140% damage to each',
        lv4: 'As Moya, Ganjiang sword deals 75% damage; as Ganjiang, Moye sword deals 150% damage to each',
      },
    },
    'skill three': {
      type: 'Active',
      name: 'Spirit Slash',
      description: {
        lv1: [
          {
            type: 'text',
            content: 'As Moye, she slashes her sword, dealing 3x ',
          },
          { type: 'value', content: '80%' },
          {
            type: 'text',
            content:
              ' damage to one target. As Ganjiang, he fires sword energy to 3 enemies, dealing ',
          },
          { type: 'value', content: '120%' },
          { type: 'text', content: ' damage to each target.' },
        ],
        lv2: 'As Moye, deals 85% damage; as Ganjiang, deals 135% damage',
        lv3: "As Moye, the last slash is guaranteed to Crit; as Ganjiang, target's Defense is decreased by 10% for 5s",
        lv4: 'As Moye, deals 90% damage; as Ganjiang, deals 150% damage',
      },
    },
    'skill four': {
      type: 'Passive',
      name: 'Craftsmanship',
      description: {
        lv1: [
          { type: 'text', content: 'As Moye, she increases Dodge by ' },
          { type: 'value', content: '36%' },
          {
            type: 'text',
            content: '. As Ganjiang, he increases Crit Chance by ',
          },
          { type: 'value', content: '36%' },
          { type: 'text', content: '.' },
        ],
        lv2: 'As Moye, increases Dodge by 39%; as Ganjiang, increases Crit Chance by 39%',
        lv3: 'As Moye, increases Dodge by 42%; as Ganjiang, increases Crit Chance by 42%',
        lv4: 'As Moye, increases Dodge by 45%; as Ganjiang, increases Crit Chance by 45%',
      },
    },
  },
  'Joan of Arc': {
    ultimate: {
      type: 'Ultimate',
      name: 'Deus le Volt',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Joan of Arc summons a shield of light on the ally Hero with the lowest Health and protects them from any enemy damage for ',
          },
          { type: 'value', content: '5s' },
          { type: 'text', content: '.' },
        ],
        lv2: 'Additionally, the target is immune to control',
        lv3: 'Lasts for 6s',
        lv4: 'Lasts for 7s',
      },
    },
    'skill two': {
      type: 'Active',
      name: 'Victorious Sprint',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'At the beginning of the battle, Joan of Arc charges toward an enemy target, dealing ',
          },
          { type: 'value', content: '250%' },
          {
            type: 'text',
            content:
              ' damage to them. She then knocks back and stuns them for ',
          },
          { type: 'value', content: '2s' },
          {
            type: 'text',
            content: '. Joan cannot be targeted during her initial charge.',
          },
        ],
        lv2: 'Deals 275% damage',
        lv3: 'Stuns the enemies for 2.5s',
        lv4: 'Deals 300% damage',
      },
    },
    'skill three': {
      type: 'Active',
      name: 'Sweeping Charge',
      description: {
        lv1: [
          {
            type: 'text',
            content: 'Joan of Arc swipes with the banner, dealing ',
          },
          { type: 'value', content: '150%' },
          {
            type: 'text',
            content:
              ' damage to enemies in front of her and knocking them down for ',
          },
          { type: 'value', content: '1.5s' },
          { type: 'text', content: '. For every enemy hit, Joan recovers ' },
          { type: 'value', content: '10%' },
          { type: 'text', content: ' of max Health.' },
        ],
        lv2: 'Deals 200% damage',
        lv3: 'For every enemy hit, Joan recovers 15% of max Health',
        lv4: 'Knocks the enemy down for 2s',
      },
    },
    'skill four': {
      type: 'Active',
      name: 'Banner of Honor',
      description: {
        lv1: [
          {
            type: 'text',
            content: 'Joan of Arc thrusts the banner into the soil for ',
          },
          { type: 'value', content: '8s' },
          {
            type: 'text',
            content: ' and increases the Attack of nearby allies by ',
          },
          { type: 'value', content: '15%' },
          { type: 'text', content: ' for the duration.' },
        ],
        lv2: 'Increases the Attack of nearby allies by 17.5%',
        lv3: 'Increases the duration to 10s',
        lv4: 'Increases the Attack of nearby allies by 20%',
      },
    },
  },
  Cleopatra: {
    ultimate: {
      type: 'Ultimate',
      name: 'Poisonous Wane',
      description: {
        lv1: [
          { type: 'text', content: 'Cleopatra deals ' },
          { type: 'value', content: '100%' },
          {
            type: 'text',
            content:
              ' damage to all enemies. For every stack of "Snake Poison" on individual targets, the damage dealt increases by ',
          },
          { type: 'value', content: '25%' },
          { type: 'text', content: ' for each stack.' },
        ],
        lv2: 'Every stack of "Snake Poison" increases damage dealt by 30% for individual units',
        lv3: 'Deals 150% damage',
        lv4: 'Every stack of "Snake Poison" increases damage dealt by 35% for individual units',
      },
    },
    'skill two': {
      type: 'Active',
      name: 'Crpyt Cobra',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Cleopatra summons a Viper Totem in front of a random target. The Totem has ',
          },
          { type: 'value', content: '100%' },
          { type: 'text', content: " of Cleopatra's Attack, Defense and " },
          { type: 'value', content: '50%' },
          {
            type: 'text',
            content: ' of her Health. The totem releases poison to deal ',
          },
          { type: 'value', content: '35%' },
          { type: 'text', content: ' damage to the enemy.' },
        ],
        lv2: 'Deals 45% damage',
        lv3: 'Targets 2 enemies at once',
        lv4: 'Deals 50% damage',
      },
    },
    'skill three': {
      type: 'Active',
      name: 'Fetid Fumes',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Cleopatra casts a poisonous fog into the area with the most enemies. Every ',
          },
          { type: 'value', content: '2s' },
          { type: 'text', content: ', it deals ' },
          { type: 'value', content: '60%' },
          {
            type: 'text',
            content: ' damage to enemies within for a total of ',
          },
          { type: 'value', content: '8s' },
          { type: 'text', content: '.' },
        ],
        lv2: 'Deals 65% damage',
        lv3: 'Deals 70% damage',
        lv4: 'Deals 75% damage',
      },
    },
    'skill four': {
      type: 'Passive',
      name: 'Toxic Beuty',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Every time Cleopatra or her summons deal damage, inflict 1 stack of "Snake Poison", which lasts for ',
          },
          { type: 'value', content: '10s' },
          { type: 'text', content: '. "Snake Poison" can be stacked up to ' },
          { type: 'value', content: '10' },
          {
            type: 'text',
            content: ' times. Each stack deals damage equal to ',
          },
          { type: 'value', content: '3%' },
          { type: 'text', content: " of Cleopatra's Attack every second." },
        ],
        lv2: 'Deals 3.5% damage per second for each stack',
        lv3: 'Additionally, each stack of "Snake Poison" decreases the enemy\'s healing received by 7.5%',
        lv4: 'Deals 4% damage per second for each stack',
      },
    },
  },
  Cassandra: {
    ultimate: {
      type: 'Ultimate',
      name: 'Pious Plea',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Cassandra prays to recover all allies to their max Health. In the ',
          },
          { type: 'value', content: '5s' },
          { type: 'text', content: ' after this Health is gained, ' },
          { type: 'value', content: '70%' },
          {
            type: 'text',
            content:
              ' of the amount recovered will slowly drain away (total amount of Health gained cannot exceed ',
          },
          { type: 'value', content: '400%' },
          { type: 'text', content: " of Cassandra's Attack)." },
        ],
        lv2: '60% of the amount recovered will drain away',
        lv3: '50% of the amount recovered will drain away',
        lv4: 'The drain time increases to 8s',
      },
    },
    'skill two': {
      type: 'Active',
      name: 'Holy Illumination',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Cassandra releases Holy Energy at the target nearest to her. This energy then bounces to ',
          },
          { type: 'value', content: '3' },
          { type: 'text', content: ' other Heroes nearby, recovering ' },
          { type: 'value', content: '8%' },
          { type: 'text', content: ' of max Health if ally or dealing ' },
          { type: 'value', content: '100%' },
          { type: 'text', content: ' damage if enemy.' },
        ],
        lv2: 'The energy is conducted up to 4 times',
        lv3: 'Recovers 10% of max Health to allies',
        lv4: 'Deals 110% damage to enemies',
      },
    },
    'skill three': {
      type: 'Active',
      name: 'Breathless Prayer',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Cassandra prays for the ally with the lowest Health. For the next ',
          },
          { type: 'value', content: '3' },
          { type: 'text', content: ' attacks, this Hero recovers ' },
          { type: 'value', content: '5%' },
          {
            type: 'text',
            content: ' of their max Health each time they are hit.',
          },
        ],
        lv2: 'Recovers 7.5% of max Health',
        lv3: 'The skill is effective for the next 4 attacks',
        lv4: 'Recovers 10% of max Health',
      },
    },
    'skill four': {
      type: 'Passive',
      name: 'Guardian Spirit',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'After Cassandra suffers lethal damage, she turns into an angel to heal all allies for ',
          },
          { type: 'value', content: '12s' },
          {
            type: 'text',
            content: ' (can only use active skills during this time).',
          },
        ],
        lv2: 'Reduces damage taken by 10% to nearby allies',
        lv3: 'Lasts for 15s',
        lv4: 'Reduces damage taken by 20% to nearby allies',
      },
    },
  },
  Archimedes: {
    ultimate: {
      type: 'Ultimate',
      name: 'Power Surge',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Typically Archimedes\'s Attack SPeed is fast, causing 75% damage each hit. When "Power Surge" begins, the airship overloads for  ',
          },
          { type: 'value', content: '10s' },
          {
            type: 'text',
            content: ', increasing his already fast Attack Speed by ',
          },
          { type: 'value', content: '300%' },
          {
            type: 'text',
            content: '. His auto-attack now also targets ',
          },
          { type: 'value', content: '2' },
          { type: 'text', content: ' units to deal ' },
          { type: 'value', content: '30%' },
          {
            type: 'text',
            content:
              ' damage each hit. After "Power Surge" ends, Archimedes will need to repair his airship for ',
          },
          { type: 'value', content: '5s' },
          { type: 'text', content: '.' },
        ],
        lv2: 'During "Power Surge", increase all damage dealt by Archimedes by 10%',
        lv3: 'During "Power Surge", increase all damage dealt by Archimedes by 20%',
        lv4: 'During "Power Surge", increase all damage dealt by Archimedes by 30%',
      },
    },
    'skill two': {
      type: 'Passive',
      name: 'Focal Fire',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Archimedes fires a line of focused energy directly in front of him, dealing  ',
          },
          { type: 'value', content: '140%' },
          { type: 'text', content: ' damage to enemies in its path.' },
        ],
        lv2: 'Deals 160% damage',
        lv3: 'Additionally, stuns the target(s) for 0.5s',
        lv4: 'Deals 180% damage',
      },
    },
    'skill three': {
      type: 'Passive',
      name: 'Piercing Rounds',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              "When Archimedes deals damage to an enemy, apply an additional penetration effect which decreases target's Defense by ",
          },
          { type: 'value', content: '2.5%' },
          {
            type: 'text',
            content: ' for 10. The effect can be stacked up to ',
          },
          { type: 'value', content: '10' },
          {
            type: 'text',
            content: ' times.',
          },
        ],
        lv2: "Decreases target's Defense by 3%",
        lv3: "Decreases target's Defense by 3.5%",
        lv4: "Decreases target's Defense by 4%",
      },
    },
    'skill four': {
      type: 'Passive',
      name: 'Sunder Grenade',
      description: {
        lv1: [
          {
            type: 'text',
            content: 'After ',
          },
          { type: 'value', content: '20' },
          {
            type: 'text',
            content: ' hits, Archimedes launches a grenade to deal ',
          },
          { type: 'value', content: '125%' },
          {
            type: 'text',
            content: ' damage to the target and nearby enemies.',
          },
        ],
        lv2: 'Deals 150% damage',
        lv3: 'Attack cannot be blocked/dodged',
        lv4: 'Deals 175% damage',
      },
    },
  },
  // ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // ------------------------------------- VERDIAN -------------------------------------
  Nagakanya: {
    ultimate: {
      type: 'Ultimate',
      name: 'Blessing of Rain',
      description: {
        lv1: [
          { type: 'text', content: 'Nagakanya prays for rain for ' },
          { type: 'value', content: '7s' },
          {
            type: 'text',
            content:
              '. During this time, recover Health to all allies equal to ',
          },
          { type: 'value', content: '3%' },
          { type: 'text', content: ' of their max Health every second.' },
        ],
        lv2: 'Increases duration to 9s',
        lv3: "Additionally, Nagakanya's Defense is increased by 100% for the skill duration",
        lv4: 'Recovers Health to all allies equal to 4% of their max Health',
      },
    },
    'skill two': {
      type: 'Active',
      name: 'Aqua Barrier',
      description: {
        lv1: [
          {
            type: 'text',
            content: 'Nagakanya summons a bubble shield that absorbs ',
          },
          { type: 'value', content: '180%' },
          {
            type: 'text',
            content:
              ' of her Attack to the ally Hero with the lowest Health, lasting for ',
          },
          { type: 'value', content: '5s' },
          {
            type: 'text',
            content:
              '. When the time expires or the shield breaks, that ally Hero and all nearby allies recover Health equal to ',
          },
          { type: 'value', content: '100%' },
          { type: 'text', content: ' of her Attack.' },
        ],
        lv2: 'Absorbs 190% damage',
        lv3: 'Recovers Health equal to 120% of her Attack',
        lv4: 'Absorbs 200% damage',
      },
    },
    'skill three': {
      type: 'Active',
      name: 'Surging Wave',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Nagakanya summons a jet of water to launch an enemy target into the air, dealing ',
          },
          { type: 'value', content: '150%' },
          { type: 'text', content: ' damage and stunning them for ' },
          { type: 'value', content: '2s' },
          { type: 'text', content: '.' },
        ],
        lv2: 'Deals 200% damage',
        lv3: 'Stuns the enemy for 2.5s',
        lv4: 'Deals 250% damage',
      },
    },
    'skill four': {
      type: 'Passive',
      name: 'Aqua Favor',
      description: {
        lv1: [
          {
            type: 'text',
            content: "Increase Nagakanya's healing abilities by ",
          },
          { type: 'value', content: '15%' },
          { type: 'text', content: '.' },
        ],
        lv2: 'Increases healing ability by 18%',
        lv3: 'When Nagakanya over-heals, convert the excess Health into a shield for the target',
        lv4: 'Increases healing ability by 25% to allies with Health less than 20%',
      },
    },
  },
  'Tamamo no Mae': {
    ultimate: {
      type: 'Ultimate',
      name: 'Wrath of Nine-tail',
      description: {
        lv1: [
          { type: 'text', content: 'Tamamo summons ' },
          { type: 'value', content: '10' },
          {
            type: 'text',
            content:
              ' "Fox Fires" around herself, drastically increasing the range and fire rate of all "Fox Fires" while the skill is active.',
          },
        ],
        lv2: 'Summons 11 "Fox Fires"',
        lv3: 'Summons 12 "Fox Fires"',
        lv4: 'Reset the cooldown of Spirit Fox Fire',
      },
    },
    'skill two': {
      type: 'Active',
      name: 'Spirit Fox Fire',
      description: {
        lv1: [
          { type: 'text', content: 'Tamamo summons ' },
          { type: 'value', content: '3' },
          {
            type: 'text',
            content:
              ' "Fox Fires". They will lock on and travel to a random nearby enemy, dealing ',
          },
          { type: 'value', content: '100%' },
          { type: 'text', content: ' damage.' },
        ],
        lv2: 'Summon 4 "Fox Fires"',
        lv3: 'Deals 110% damage',
        lv4: 'Deals 120% damage',
      },
    },
    'skill three': {
      type: 'Active',
      name: 'Flower Dance',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Tamamo quickly moves behind the furthest enemy target, dealing ',
          },
          { type: 'value', content: '100%' },
          {
            type: 'text',
            content: ' damage to them and all enemies on route.',
          },
        ],
        lv2: 'Deals 125% damage',
        lv3: 'Deals 150% damage',
        lv4: 'Deals 175% damage',
      },
    },
    'skill four': {
      type: 'Passive',
      name: 'Phantom Dash',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Tamamo is immune to the next incoming Attack and teleport to a random position. This effect can be triggered once every ',
          },
          { type: 'value', content: '6s' },
          { type: 'text', content: '.' },
        ],
        lv2: 'Can be triggered once every 5s',
        lv3: 'Can be triggered once every 4s',
        lv4: 'Can be triggered once every 3s',
      },
    },
  },
  Idun: {
    ultimate: {
      type: 'Ultimate',
      name: 'Tree of Life',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Idun summons the Tree of Youth. "Golden Apples" drop from the tree, restoring ',
          },
          { type: 'value', content: '25' },
          { type: 'text', content: ' Energy and recovering Health equal to ' },
          { type: 'value', content: '35%' },
          {
            type: 'text',
            content: " of Idun's Attack every second to all ally Heroes for ",
          },
          { type: 'value', content: '6s' },
          { type: 'text', content: '.' },
        ],
        lv2: 'Recovers Health equal to 40% of Attack',
        lv3: 'Restores 35 Energy every second',
        lv4: 'Recovers Health equal to 45% of Attack',
      },
    },
    'skill two': {
      type: 'Passive',
      name: "Idun's Salvation",
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'At the start of the battle, Idun summons 3 "Golden Apples". When an ally Hero has less than ',
          },
          { type: 'value', content: '50%' },
          {
            type: 'text',
            content: ' Health, they consume this apple to recover ',
          },
          { type: 'value', content: '20%' },
          {
            type: 'text',
            content:
              ' of their max Health. This effect can only be used once every ',
          },
          { type: 'value', content: '6s' },
          { type: 'text', content: '.' },
        ],
        lv2: "Restores 25% of the Hero's max Health",
        lv3: 'When all the "Golden Apples" are consumed, Idun spends 500 Energy to summon 3 more "Golden Apples"',
        lv4: "Restores 30% of the Hero's max Health",
      },
    },
    'skill three': {
      type: 'Passive',
      name: 'Divine Blessing',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'When any backline ally Hero takes damage equaling more than ',
          },
          { type: 'value', content: '10%' },
          { type: 'text', content: ' of their max Health, Idun spends ' },
          { type: 'value', content: '80' },
          {
            type: 'text',
            content:
              ' Energy to block this damage. This effect can only be triggered once every ',
          },
          { type: 'value', content: '5s' },
          { type: 'text', content: '.' },
        ],
        lv2: 'Spends 65 Energy to block this damage',
        lv3: 'Idun recovers 10 Energy every second',
        lv4: 'Can be triggered every 4s',
      },
    },
    'skill four': {
      type: 'Active',
      name: 'Spirit Away',
      description: {
        lv1: [
          { type: 'text', content: 'Idun summons a "Spirit Stag" to steal ' },
          { type: 'value', content: '100' },
          { type: 'text', content: ' Energy from the target and deal ' },
          { type: 'value', content: '150%' },
          { type: 'text', content: ' damage.' },
        ],
        lv2: 'Steals 110 Energy',
        lv3: 'Deals 200% damage',
        lv4: 'Steals 120 Energy',
      },
    },
  },
  Gaia: {
    ultimate: {
      type: 'Ultimate',
      name: 'Primal Might',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Gaia channels the power of the Earth to deal damage equal to ',
          },
          { type: 'value', content: '2%' },
          {
            type: 'text',
            content:
              ' of her max Health 4 times to all enemies and reducing their Attack Speed by ',
          },
          { type: 'value', content: '40%' },
          { type: 'text', content: ' for ' },
          { type: 'value', content: '3s' },
          { type: 'text', content: '.' },
        ],
        lv2: "Deals damage equal to 2.2% of Gaia's max Health",
        lv3: 'Reduces Attack Speed by 50%',
        lv4: "Deals damage equal to 2.4% of Gaia's max Health",
      },
    },
    'skill two': {
      type: 'Active',
      name: 'Brutal Bludgeon',
      description: {
        lv1: [
          { type: 'text', content: 'Gaia charges briefly and deals ' },
          { type: 'value', content: '200%' },
          {
            type: 'text',
            content: ' damage to enemies and knocks them into the air.',
          },
        ],
        lv2: 'For every stack of "Earthly Vein", deal 20% extra damage',
        lv3: 'Deals 250% damage',
        lv4: 'Additionally, targets are stunned for 1.5s when they land',
      },
    },
    'skill three': {
      type: 'Passive',
      name: 'Rocky Semblance',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'At the beginning of the battle, Gaia gainst a "Stone Shield" which increases her Defense by ',
          },
          { type: 'value', content: '40%' },
          {
            type: 'text',
            content:
              '. When Gaia is the target of a control skill while it is active, the shield will be consumed to remove the control (Regenerates ',
          },
          { type: 'value', content: '10s' },
          { type: 'text', content: ' afterwards).' },
        ],
        lv2: 'When Gaia removed a control, she recovers 4% Health per second for 5s',
        lv3: 'Increases Defense by 60% while "Stone Shield" is active',
        lv4: 'When Gaia removed a control, she recovers 5% Health per second for the duration',
      },
    },
    'skill four': {
      type: 'Passive',
      name: 'Earthly Vein',
      description: {
        lv1: [
          { type: 'text', content: 'For every ' },
          { type: 'value', content: '35%' },
          {
            type: 'text',
            content:
              ' of Health lost, Gaia gains 1 stack of "Earthly Vein", increasing her max Health by ',
          },
          { type: 'value', content: '4%' },
          { type: 'text', content: '. This effect can stack up to ' },
          { type: 'value', content: '6' },
          { type: 'text', content: ' times.' },
        ],
        lv2: 'Additionally, 50% of the increased Health will be recovered as well',
        lv3: 'For every 30% of total Health lost, add 1 stack of "Earthly Vein"',
        lv4: 'For every 25% of total Health lost, add 1 stack of "Earthly Vein"',
      },
    },
  },
  Oberon: {
    ultimate: {
      type: 'Ultimate',
      name: 'Homecoming',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Oberon throws his blades at the furthest enemy in the field and disappears. As the twin blades are travelling, they deal ',
          },
          { type: 'value', content: '250%' },
          {
            type: 'text',
            content:
              ' damage to all enemies in their way. When the blades reach their destination, they pause for ',
          },
          { type: 'value', content: '1.5s' },
          { type: 'text', content: ' and then deal ' },
          { type: 'value', content: '100%' },
          { type: 'text', content: ' damage every ' },
          { type: 'value', content: '0.5s' },
          {
            type: 'text',
            content:
              ' to nearby enemies. After, Oberon appears again and catches the blades, dealing ',
          },
          { type: 'value', content: '250%' },
          { type: 'text', content: ' damage to nearby enemies.' },
        ],
        lv2: 'The blades deal 300% damage to enemies in their way',
        lv3: 'The blades deal 120% damage to enemies near the destination',
        lv4: 'When Oberon appears and catches the blades, deal 300% damage to nearby enemies',
      },
    },
    'skill two': {
      type: 'Active',
      name: 'Swirling Blades',
      description: {
        lv1: [
          {
            type: 'text',
            content: 'Oberon slashes with his twin blades to deal 4x ',
          },
          { type: 'value', content: '60%' },
          {
            type: 'text',
            content: ' damage to the target and increases his Dodge by ',
          },
          { type: 'value', content: '35%' },
          { type: 'text', content: ' for ' },
          { type: 'value', content: '3s' },
          { type: 'text', content: '.' },
        ],
        lv2: 'Deals 65% damage',
        lv3: 'Deals 70% damage',
        lv4: 'Deals 75% damage',
      },
    },
    'skill three': {
      type: 'Active',
      name: 'Storm of Blades',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Oberon spins his blades, blocking all damage and debuffs for ',
          },
          { type: 'value', content: '3s' },
          {
            type: 'text',
            content:
              '. He then releases a wave of energy in front of himself, dealing ',
          },
          { type: 'value', content: '120%' },
          { type: 'text', content: ' damage to targets in range.' },
        ],
        lv2: 'Deals additional damage equal to the number of blocked attacks during the skill x 40% (to a maximum of 200%)',
        lv3: 'Deals 135% damage',
        lv4: 'Deals 150% damage',
      },
    },
    'skill four': {
      type: 'Passive',
      name: 'Twin Blades',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'When Oberon uses auto-attacks, he switches blades to inflict different effects.',
          },
          { type: 'line-break', content: '' },
          { type: 'text', content: 'The left blade removes ' },
          { type: 'value', content: '20' },
          {
            type: 'text',
            content:
              ' Energy from the target; the right blade deals an additional ',
          },
          { type: 'value', content: '1.5%' },
          { type: 'text', content: ' of ' },
          { type: 'true-damage', content: 'True Damage' },
          { type: 'text', content: '.' },
          { type: 'line-break', content: '' },
          {
            type: 'text',
            content:
              "When Oberon uses any skill, both blades' effects will be added.",
          },
        ],
        lv2: 'The right blade deals 1.8% of True Damage',
        lv3: 'The left blade removes 25 Energy from the target',
        lv4: 'The right blade deals 2.1% of True Damage',
      },
    },
  },
  Flora: {
    ultimate: {
      type: 'Ultimate',
      name: 'Flowery Implosion',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Flora summons petal circles around each enemy. These circles explode after a short delay, dealing ',
          },
          { type: 'value', content: '350%' },
          {
            type: 'text',
            content:
              ' damage to a small area. If an enemy is hit by this skill multiple times, the damage is reduced each time.',
          },
        ],
        lv2: 'Deals 375% damage',
        lv3: 'Additionally, stuns the target for 2s',
        lv4: 'Deals 400% damage',
      },
    },
    'skill two': {
      type: 'Active',
      name: 'Drifting Petals',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Flora fires petals at an enemy target. These petals bounce between the nearby enemies up to ',
          },
          { type: 'value', content: '4' },
          { type: 'text', content: ' times, dealing ' },
          { type: 'value', content: '80%' },
          { type: 'text', content: ' damage each hit.' },
        ],
        lv2: 'Petals bounce up to 5 times',
        lv3: 'Additionally, damage taken by the target increases by 10% for 10s. This effect can have up to 5 stacks.',
        lv4: 'Deals 85% damage each hit',
      },
    },
    'skill three': {
      type: 'Active',
      name: 'Holy Flourescence',
      description: {
        lv1: [
          { type: 'text', content: 'Flora fires a petal orb that deals 2x ' },
          { type: 'value', content: '150%' },
          {
            type: 'text',
            content: ' damage to target(s) directly in front of her.',
          },
        ],
        lv2: 'If no enemy is hit during this skill, the following auto-attack will trigger "Blooming Magic".',
        lv3: 'Deals 200% damage',
        lv4: 'Additionally, increases control effects by 50% for 5s',
      },
    },
    'skill four': {
      type: 'Passive',
      name: 'Blooming Magic',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Whenever Flora uses an active skill 2 time(s), her next auto-attack deals additional damage equal to ',
          },
          { type: 'value', content: '25%' },
          {
            type: 'text',
            content: " of the target's current missing Health. ",
          },
          {
            type: 'true-damage',
            content: 'This damage is treated as True Damage',
          },
          { type: 'text', content: '.' },
        ],
        lv2: "Auto-attack deals additional damage equal to 27.5% of the target's lost Health",
        lv3: 'Additionally, stuns the target for 1s',
        lv4: "Auto-attack deals additional damage equal to 30% of the target's lost Health",
      },
    },
  },
};

export default skillData;

// const dummyData = {
//   heroName: {
//     ultimate: {
//       type: '',
//       name: '',
//       description: {
//         lv1: [
//           { type: 'text', content: '' },
//           { type: 'value', content: '' },
//         ],
//         lv2: '',
//         lv3: '',
//         lv4: '',
//       },
//     },
//     "skill two": {
//       type: '',
//       name: '',
//       description: {
//         lv1: [
//           { type: 'text', content: '' },
//           { type: 'value', content: '' },
//         ],
//         lv2: '',
//         lv3: '',
//         lv4: '',
//       },
//     },
//     "skill three": {
//       type: '',
//       name: '',
//       description: {
//         lv1: [
//           { type: 'text', content: '' },
//           { type: 'value', content: '' },
//         ],
//         lv2: '',
//         lv3: '',
//         lv4: '',
//       },
//     },
//     "skill four": {
//       type: '',
//       name: '',
//       description: {
//         lv1: [
//           { type: 'text', content: '' },
//           { type: 'value', content: '' },
//         ],
//         lv2: '',
//         lv3: '',
//         lv4: '',
//       },
//     },
//   },
// };

//A skill can be called like this:

// {Object.keys(skillData['Typhon'][`${skill}`].description).map(
//   (level, levelIndex) => {
//     if (level === 'lv1') {
//       return skillData['Typhon'][`${skill}`].description[
//         `${level}`
//       ].map((piece, pieceIndex) => {
//         if (piece.type === 'value') {
//           return (
//             <span className='highlight' key={pieceIndex}>
//               {piece.content}
//             </span>
//           );
//         } else if (piece.type === 'line-break') {
//           return <br key={pieceIndex} />;
//         } else if (piece.type === 'text') {
//           return piece.content;
//         } else {
//           return (
//             <span
//               className={'highlight-' + piece.type}
//               key={pieceIndex}
//             >
//               {piece.content}
//             </span>
//           );
//         }
//       });
//     } else {
//       return (
//         <div className='skill-description' key={levelIndex}>
//           {skillData['Typhon'][`${skill}`].description[`${level}`]}
//         </div>
//       );
//     }
//   }
// )}
