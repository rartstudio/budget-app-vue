import { shallowMount } from "@vue/test-utils";
import FormInput from "@/components/FormInput";

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(FormInput);
});

afterEach(() => {
  wrapper.destroy();
});

describe("FormInput", () => {
  it("display a label and select", () => {
    const formBudget = wrapper.find('[data-testid="formBudget"]');
    expect(formBudget.exists()).toBe(true);
  });
  it("emitted value from form to parent", async () => {
    const budget = {
      type: "Income",
      details: "Freelancing",
      date: "2021-12-12",
      amount: 200000
    };
    wrapper.vm.$emit("formData", budget);
    await wrapper.vm.$nextTick();

    const formSubmitted = wrapper.emitted().formData;
    // console.log(formSubmitted);

    //testing is input submitted is emitted or not
    expect(formSubmitted).toBeTruthy();

    //testing is input submitted has a length at least 1
    expect(formSubmitted).toHaveLength(1);

    //testing value we emitted with dummy
    expect(formSubmitted[0][0]).toEqual(budget);
  });
});
