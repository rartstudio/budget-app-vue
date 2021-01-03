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
      id: '41294730-c376-4c59-b023-2d4e3bd9596f',
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

  it('add Button to enable delete feature', ()=> {
    const btn = wrapper.find('[data-testid="itemButton"]');
    expect(btn.exists()).toBe(true);
  })

  it('emitting type and id from value', async ()=> {
    const data = {
      id: '41294730-c376-4c59-b023-2d4e3bd9596f',
      type : "Income"
    }
    wrapper.vm.$emit('idValue',data);

    await wrapper.vm.$nextTick();

    const formSubmitted = wrapper.emitted().idValue;
    // console.log(formSubmitted);

    //testing is input submitted is emitted or not
    expect(formSubmitted).toBeTruthy();

    //testing is input submitted has a length at least 1
    expect(formSubmitted).toHaveLength(1);

    //testing value we emitted with dummy
    expect(formSubmitted[0][0]).toEqual(data);

  });
});
