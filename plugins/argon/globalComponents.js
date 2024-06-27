import Badge from '~/components/Argon/argon-core/Badge.vue';
import BaseAlert from "~/components/Argon/argon-core/BaseAlert";
import BaseButton from '~/components/Argon/argon-core/BaseButton.vue';
import BaseCheckbox from '~/components/Argon/argon-core/Inputs/BaseCheckbox.vue';
import BaseDropdown from '~/components/Argon/argon-core/BaseDropdown.vue';
import BaseHeader from '~/components/Argon/argon-core/BaseHeader';
import BaseInput from '~/components/Argon/argon-core/Inputs/BaseInput.vue';
import BaseNav from "~/components/Argon/argon-core/Navbar/BaseNav";
import BasePagination from "~/components/Argon/argon-core/BasePagination";
import BaseProgress from "~/components/Argon/argon-core/BaseProgress";
import BaseRadio from "~/components/Argon/argon-core/Inputs/BaseRadio";
import BaseSwitch from '~/components/Argon/argon-core/BaseSwitch.vue';
import Card from '~/components/Argon/argon-core/Cards/Card.vue';
import Modal from '~/components/Argon/argon-core/Modal.vue';
import RouteBreadcrumb from '~/components/Argon/argon-core/Breadcrumb/RouteBreadcrumb';
import StatsCard from '~/components/Argon/argon-core/Cards/StatsCard.vue';
import { Input, Tooltip, Popover } from 'element-ui';
import Vue from 'vue';
/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

Vue.component(Badge.name, Badge);
Vue.component(BaseAlert.name, BaseAlert);
Vue.component(BaseButton.name, BaseButton);
Vue.component(BaseCheckbox.name, BaseCheckbox);
Vue.component(BaseHeader.name, BaseHeader);
Vue.component(BaseInput.name, BaseInput);
Vue.component(BaseDropdown.name, BaseDropdown);
Vue.component(BaseNav.name, BaseNav);
Vue.component(BasePagination.name, BasePagination);
Vue.component(BaseProgress.name, BaseProgress);
Vue.component(BaseRadio.name, BaseRadio);
Vue.component(BaseSwitch.name, BaseSwitch);
Vue.component(Card.name, Card);
Vue.component(Modal.name, Modal);
Vue.component(StatsCard.name, StatsCard);
Vue.component(RouteBreadcrumb.name, RouteBreadcrumb);
Vue.component(Input.name, Input);
Vue.use(Tooltip);
Vue.use(Popover);
