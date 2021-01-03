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
  });
  it('emitting type and id from cardItem component', async ()=> {
    const data = {
      id: '41294730-c376-4c59-b023-2d4e3bd9596f',
      type : "Income"
    }
    wrapper.vm.$emit('deleteData',data);

    await wrapper.vm.$nextTick();

    const formSubmitted = wrapper.emitted().deleteData;
    // console.log(formSubmitted);

    //testing is input submitted is emitted or not
    expect(formSubmitted).toBeTruthy();

    //testing is input submitted has a length at least 1
    expect(formSubmitted).toHaveLength(1);

    //testing value we emitted with dummy
    expect(formSubmitted[0][0]).toEqual(data);

  });
});
