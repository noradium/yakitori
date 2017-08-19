import FoodBase from './FoodBase';

export default class Sasami extends FoodBase {
  protected get assetNameNama() {
    return 'sasami_nama';
  }
  protected get assetNameGood() {
    return 'sasami_good';
  }
  protected get assetNameKoge() {
    return 'sasami_koge';
  }

  getFoodName() {
    return 'sasami';
  }
}
