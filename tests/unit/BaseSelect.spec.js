import { shallowMount } from "@vue/test-utils";
import BaseSelect from "@/components/BaseSelect";

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(BaseSelect, {
    propsData: {
      options: ["Income", "Expense"],
      label: "Type",
      value: "Expense"
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe("BaseSelect", () => {
  it("display a label and select", () => {
    const label = wrapper.find('[data-testid="labelSelect"]');
    const select = wrapper.find('[data-testid="baseSelect"]');
    const options = wrapper.findAll('[data-testid="baseOptions"]');

    expect(select.exists()).toBe(true);
    expect(label.exists()).toBe(true);
    expect(options.exists()).toBe(true);
  });

  it("looping a option data from props options", () => {
    const options = wrapper.findAll('[data-testid="baseOptions"]');
    // console.log(options.length);
    expect(options.length).toBeGreaterThan(1);
  });

  it("accepting label from props", () => {
    const label = "Type";
    expect(wrapper.vm.label).toEqual(label);
  });

  it('accepting value from props to enabled selected', ()=> {
    expect(wrapper.vm.value).toEqual(wrapper.vm.options[1])
  })
});
