<template>
  <div class="section">
    <div class="container">
      <div class="col-md-10 ml-auto mr-auto">
        <card type="blog">
          <h6 class="category text-primary">Notifications Portal</h6>
          <h5 class="card-title">
            This Is Your One-Way Communication With Your Community.
          </h5>
          <div class="card-footer">
            <div class="author">
              <img
                v-lazy="'img/julie.jpg'"
                alt="..."
                class="avatar img-raised"
              />
              <span>Steve M.</span>
            </div>
            <div class="stats stats-right">
              <i class="now-ui-icons tech_watch-time"></i> Last notification
              sent 5 minutes ago
            </div>
          </div>
        </card>
      </div>
      <div class="col-md-10 ml-auto mr-auto">
        <n-button type="success" round>
          <i class="now-ui-icons "></i> Create Notification
        </n-button>
      </div>
      <div class="row">
        <div class="col-md-10 ml-auto mr-auto">
          <card class="card-plain">
            <div class="row">
              <div class="col-sm-12">
                <el-table :data="tableData">
                  <el-table-column
                    min-width="50"
                    type="index"
                  ></el-table-column>
                  <el-table-column
                    min-width="100"
                    align="left"
                    prop="title"
                    label="Title"
                  >
                  </el-table-column>
                  <el-table-column
                    min-width="80"
                    align="left"
                    prop="date"
                    label="Date"
                  >
                  </el-table-column>
                  <el-table-column
                    min-width="350"
                    prop="desc"
                    align="left"
                    label="Description"
                  >
                  </el-table-column>
                  <el-table-column
                    min-width="150"
                    header-align="right"
                    label="Actions"
                  >
                    <div class="text-right table-actions">
                      <el-tooltip
                        content="Edit"
                        :open-delay="300"
                        placement="top"
                      >
                        <n-button type="success" round simple size="sm" icon>
                          <i class="now-ui-icons ui-2_settings-90"></i>
                        </n-button>
                      </el-tooltip>

                      <el-tooltip
                        content="Delete"
                        :open-delay="300"
                        placement="top"
                      >
                        <n-button type="danger" round simple size="sm" icon>
                          <i class="now-ui-icons ui-1_simple-remove"></i>
                        </n-button>
                      </el-tooltip>
                    </div>
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Card, Button } from "@/components";
import { Table, TableColumn, Tooltip } from "element-ui";

export default {
  components: {
    Card,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Tooltip.name]: Tooltip,
    [Button.name]: Button,
  },
  data() {
    return {
      tableData: [
        {
          title: "Volcano",
          desc: "Find cover! There will be ash and smoke in the air.",
          date: "01/12/2020:2:15a.m.",
          active: false,
        },
        {
          title: "Flood",
          desc: "If you are in the metro district find high ground.",
          date: "01/12/2020:2:15a.m.",
          active: false,
        },
        {
          title: "Fire",
          desc: "The winds are blowing north. EVACUATE NOW.",
          date: "01/12/2020:2:15a.m.",
          active: false,
        },
        {
          title: "Earthquake",
          desc: "Desaster re;ief crews are scouting downed power lines.",
          date: "01/12/2020:2:15a.m.",
          active: true,
        },
        {
          title: "Riots",
          desc: "We will be keeping protestors out of neighborhoods.",
          date: "01/12/2020:2:15a.m.",
          active: true,
        },
      ],
    };
  },
};
</script>
<style>
.checkbox-cell {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
