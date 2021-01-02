import { shallowMount } from "@vue/test-utils";
import BaseInput from "@/components/BaseInput";

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(BaseInput, {
    propsData: {
      typeInput: "text",
      placeholder: "Tambahkan keterangan",
      idInput: "detailInput",
      value: "Membeli course udemy",
      label: "Keterangan"
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe("BaseInput", () => {
  it("display a label and input", () => {
    const label = wrapper.find('[data-testid="labelInput"]');
    const input = wrapper.find('[data-testid="baseInput"]');

    expect(input.exists()).toBe(true);
    expect(label.exists()).toBe(true);
  });
  it("accepting prop : id, type, placeholder, value, label", async () => {
    const { typeInput, placeholder, idInput, value, label } = {
      typeInput: "text",
      placeholder: "Tambahkan keterangan",
      idInput: "detailInput",
      value: "Membeli course udemy",
      label: "Keterangan"
    };
    expect(wrapper.vm.idInput).toEqual(idInput);
    expect(wrapper.vm.typeInput).toEqual(typeInput);
    expect(wrapper.vm.placeholder).toEqual(placeholder);
    expect(wrapper.vm.value).toEqual(value);
    expect(wrapper.vm.label).toEqual(label);
  });

  it("emits an event with a title of todo as payload", async () => {
    const value = "Membeli course udemy";

    wrapper.vm.$emit("input", value);
    await wrapper.vm.$nextTick();

    const inputSubmitted = wrapper.emitted().input;
    // console.log(inputSubmitted);

    //testing is input submitted is emitted or not
    expect(inputSubmitted).toBeTruthy();

    //testing is input submitted has a length at least 1
    expect(inputSubmitted).toHaveLength(1);

    //testing value we emitted with dummy
    expect(inputSubmitted[0][0]).toEqual(value);
  });
});
