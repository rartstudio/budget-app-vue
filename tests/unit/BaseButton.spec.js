import { shallowMount } from "@vue/test-utils";
import BaseButton from "@/components/BaseButton";

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(BaseButton, {
    propsData: {
      title: "Save",
      btnClass: "focus:outline-none"
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe("BaseButton", () => {
  it("display a button", () => {
    const btn = wrapper.find('[data-testid="btn"]');
    expect(btn.exists()).toBe(true);
  });

  it("render a title and class props to button", () => {
    const { title, btnClass } = {
      title: "Save",
      btnClass: "focus:outline-none"
    };
    const btn = wrapper.find('[data-testid="btn"]').element.textContent;
    expect(btn.trim()).toEqual(title);
    expect(wrapper.vm.btnClass).toEqual(btnClass);
  });
});
