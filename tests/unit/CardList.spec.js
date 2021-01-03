import { shallowMount } from "@vue/test-utils";
import CardList from "@/components/CardList";

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(CardList, {
    propsData: {
      values: [
        {
          type: "Income",
          details: "Freelancing",
          date: "2021-12-12",
          amount: 200000
        },
        {
          type: "Income",
          details: "Micro Stock",
          date: "2021-12-15",
          amount: 500000
        }
      ]
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe("CardList", () => {
  it("display a card list", () => {
    const cardList = wrapper.find('[data-testid="cardList"]');
    expect(cardList.exists()).toBe(true);
  });
  it('display item card at least 1', () => {
    expect(wrapper.vm.values.length).toBeGreaterThanOrEqual(1);
  })
  it('display sum of values', () => {
      const values = wrapper.vm.values;
      let initialValue = 0
      const sum = values.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.amount;
      },initialValue);
      expect(sum).toEqual(wrapper.vm.sumOfValues);
  })
});
