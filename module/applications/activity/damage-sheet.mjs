import ActivitySheet from "./activity-sheet.mjs";

/**
 * Sheet for the damage activity.
 */
export default class DamageSheet extends ActivitySheet {

  /** @inheritDoc */
  static DEFAULT_OPTIONS = {
    classes: ["damage-activity"]
  };

  /* -------------------------------------------- */

  /** @inheritDoc */
  static PARTS = {
    ...super.PARTS,
    effect: {
      template: "systems/ketsushin-salt-silver/templates/activity/damage-effect.hbs",
      templates: [
        ...super.PARTS.effect.templates,
        "systems/ketsushin-salt-silver/templates/activity/parts/damage-damage.hbs",
        "systems/ketsushin-salt-silver/templates/activity/parts/damage-part.hbs",
        "systems/ketsushin-salt-silver/templates/activity/parts/damage-parts.hbs"
      ]
    }
  };
}
