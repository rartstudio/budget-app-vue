import { shallowMount } from "@vue/test-utils";
import CardItem from "@/components/CardItem";

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(CardItem, {
    propsData: {
      value: {
        type: "Income",
        details: "Freelancing",
        date: "12-12-2021",
        amount: 200
      }
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe("CardItem", () => {
  it("display a card item", () => {
    const cardItem = wrapper.findAll('[data-testid="cardItem"]');
    expect(cardItem.exists()).toBe(true);
  });
  it("accepting props from parent and display it to layout", () => {
    const value = {
      type: "Income",
      details: "Freelancing",
      date: "12-12-2021",
      amount: 200
    };
    const itemDate = wrapper.find('[data-testid="itemDate"]').element.textContent;
    const itemAmount = wrapper.find('[data-testid="itemAmount"]').element.textContent;
    const itemDetails = wrapper.find('[data-testid="itemDetails"]').element.textContent;

    const newItemAmount = parseInt(itemAmount.split('$')[1]);
    //console.log(itemDate,itemDetails,itemAmount);
    expect(itemDate).toEqual(value.date);
    expect(newItemAmount).toEqual(value.amount);
    expect(itemDetails).toEqual(value.details);
  });
});
