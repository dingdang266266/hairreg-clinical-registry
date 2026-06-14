export default function Home() {
  const navItems = [
    "数据总览",
    "患者档案",
    "上清液治疗记录",
    "照片对比",
    "AI疗效分析",
    "科研统计",
    "系统设置",
  ];

  const stats = [
    { label: "入组患者", value: "32", note: "本月新增 4 人" },
    { label: "治疗记录", value: "156", note: "上清液治疗 89 次" },
    { label: "随访完成率", value: "78%", note: "较上月提升 2.4%" },
    { label: "不良反应率", value: "1.8%", note: "均为轻度反应" },
  ];

  const patients = [
    {
      code: "HR-001",
      name: "王某某",
      gender: "男",
      age: "36",
      diagnosis: "雄激素性脱发",
      stage: "Norwood III",
      status: "治疗中",
    },
    {
      code: "HR-002",
      name: "李某某",
      gender: "女",
      age: "42",
      diagnosis: "弥漫性脱发",
      stage: "Ludwig I",
      status: "随访中",
    },
    {
      code: "HR-003",
      name: "张某某",
      gender: "男",
      age: "29",
      diagnosis: "发际线后移",
      stage: "Norwood II",
      status: "已完成",
    },
  ];

  const treatments = [
    { date: "2026-06-14", patient: "HR-001", item: "上清液头皮注射", dose: "5ml", doctor: "宋医生" },
    { date: "2026-06-10", patient: "HR-002", item: "上清液联合LED照射", dose: "4ml", doctor: "李医生" },
    { date: "2026-06-05", patient: "HR-003", item: "维持治疗", dose: "3ml", doctor: "张医生" },
  ];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="flex min-h-screen">
        <aside className="w-72 bg-white border-r border-slate-200 flex flex-col">
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                H
              </div>
              <div>
                <h1 className="text-lg font-bold">HairReg</h1>
                <p className="text-sm text-slate-500">毛发临床注册系统</p>
              </div>
            </div>
          </div>

          <nav className="flex-1 p-4 space-y-2">
            {navItems.map((item, index) => (
              <div
                key={item}
                className={`px-4 py-3 rounded-xl text-sm font-medium cursor-pointer ${
                  index === 0
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {item}
              </div>
            ))}
          </nav>

          <div className="p-4 border-t border-slate-200">
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-sm font-semibold">管理员</p>
              <p className="text-xs text-slate-500">临床研究负责人</p>
            </div>
          </div>
        </aside>

        <main className="flex-1">
          <header className="bg-white border-b border-slate-200 px-8 py-5 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">数据总览</h2>
              <p className="text-sm text-slate-500">上清液生发临床注册中心 V1.1</p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 rounded-xl border border-slate-200 text-sm">
                导出报告
              </button>
              <button className="px-4 py-2 rounded-xl bg-blue-600 text-white text-sm">
                新增患者
              </button>
            </div>
          </header>

          <div className="p-8 space-y-8">
            <section className="grid grid-cols-4 gap-5">
              {stats.map((item) => (
                <div key={item.label} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                  <p className="text-sm text-slate-500">{item.label}</p>
                  <p className="text-3xl font-bold mt-3">{item.value}</p>
                  <p className="text-sm text-emerald-600 mt-3">{item.note}</p>
                </div>
              ))}
            </section>

            <section className="grid grid-cols-3 gap-6">
              <div className="col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div className="p-5 border-b border-slate-200 flex justify-between">
                  <h3 className="font-bold">患者档案</h3>
                  <span className="text-sm text-blue-600">查看全部</span>
                </div>
                <table className="w-full text-sm">
                  <thead className="bg-slate-50 text-slate-500">
                    <tr>
                      <th className="text-left p-4">编号</th>
                      <th className="text-left p-4">姓名</th>
                      <th className="text-left p-4">性别</th>
                      <th className="text-left p-4">年龄</th>
                      <th className="text-left p-4">诊断</th>
                      <th className="text-left p-4">分级</th>
                      <th className="text-left p-4">状态</th>
                    </tr>
                  </thead>
                  <tbody>
                    {patients.map((p) => (
                      <tr key={p.code} className="border-t border-slate-100">
                        <td className="p-4 font-medium text-blue-700">{p.code}</td>
                        <td className="p-4">{p.name}</td>
                        <td className="p-4">{p.gender}</td>
                        <td className="p-4">{p.age}</td>
                        <td className="p-4">{p.diagnosis}</td>
                        <td className="p-4">{p.stage}</td>
                        <td className="p-4">
                          <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs">
                            {p.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                <h3 className="font-bold mb-5">AI疗效分析</h3>
                <div className="space-y-4 text-sm">
                  <div className="p-4 rounded-xl bg-blue-50">
                    <p className="font-semibold text-blue-700">总体判断</p>
                    <p className="text-slate-600 mt-2">近期患者毛发覆盖率呈改善趋势，T3随访节点效果较明显。</p>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-50">
                    <p className="font-semibold text-emerald-700">风险提示</p>
                    <p className="text-slate-600 mt-2">不良反应率处于安全阈值范围内。</p>
                  </div>
                  <button className="w-full bg-blue-600 text-white rounded-xl py-3">
                    生成AI疗效报告
                  </button>
                </div>
              </div>
            </section>

            <section className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div className="p-5 border-b border-slate-200">
                  <h3 className="font-bold">上清液治疗记录</h3>
                </div>
                <div className="divide-y divide-slate-100">
                  {treatments.map((t) => (
                    <div key={t.date + t.patient} className="p-5 flex justify-between text-sm">
                      <div>
                        <p className="font-semibold">{t.patient}｜{t.item}</p>
                        <p className="text-slate-500 mt-1">剂量：{t.dose}｜医生：{t.doctor}</p>
                      </div>
                      <span className="text-slate-500">{t.date}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                <h3 className="font-bold mb-5">照片对比</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-56 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400">
                    T0 基线照片
                  </div>
                  <div className="h-56 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400">
                    T3 三月随访
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-4 gap-2 text-xs text-center text-slate-500">
                  <div className="bg-slate-50 rounded-lg py-2">正面</div>
                  <div className="bg-slate-50 rounded-lg py-2">顶部</div>
                  <div className="bg-slate-50 rounded-lg py-2">左侧</div>
                  <div className="bg-slate-50 rounded-lg py-2">右侧</div>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <h3 className="font-bold mb-5">科研统计模块</h3>
              <div className="grid grid-cols-5 gap-4">
                {[
                  ["样本量", "32"],
                  ["平均年龄", "37.8岁"],
                  ["平均治疗次数", "4.2次"],
                  ["T3有效率", "81%"],
                  ["满意度", "4.5/5"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-xl bg-slate-50 p-5">
                    <p className="text-sm text-slate-500">{label}</p>
                    <p className="text-2xl font-bold mt-2">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <button className="px-4 py-2 rounded-xl border border-slate-200 text-sm">导出Excel</button>
                <button className="px-4 py-2 rounded-xl border border-slate-200 text-sm">生成科研摘要</button>
                <button className="px-4 py-2 rounded-xl bg-blue-600 text-white text-sm">生成统计报告</button>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}