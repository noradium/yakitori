import FoodBase from './FoodBase';

export default class Nankotsu extends FoodBase {
  protected get assetNameNama() {
    return 'nankotsu_nama';
  }
  protected get assetNameGood() {
    return 'nankotsu_good';
  }
  protected get assetNameKoge() {
    return 'nankotsu_koge';
  }
  protected get goodGrillSec() {
    return 7;
  }
  protected get kogeGrillSec() {
    return 10;
  }

  get foodName() {
    return 'nankotsu';
  }
}
