

[rewrite_local]
# > Wink VIP & Pro Unlock
^https?:\/\/api-sub\.meitu\.com\/v2\/user\/vip_info_by_group\.json url script-response-body

[mitm]
hostname = api-sub.meitu.com
*******************************/

var body = $response.body;
var vip = JSON.parse(body);

// Thiết lập trạng thái VIP Pro vĩnh viễn
vip.data = {
  is_vip: true,
  use_vip: true,
  have_valid_contract: true,
  in_trial_period: false,
  sub_type: 2,
  sub_type_name: "Pro会员",
  account_type: 1,
  account_id: "9999999999",
  active_order_id: "PRO-FOREVER",
  active_sub_order_id: "PRO-UNLOCK-999",
  active_product_id: "wink_pro_999",
  active_promotion_status: 2,
  active_promotion_status_list: [2],
  trial_period_invalid_time: "32495508000000",
  current_order_invalid_time: "3249552999000",
  invalid_time: "3249552999000",
  valid_time: "1569664800000",
  membership: {
    id: "9",
    level: 9,
    level_name: "Wink Pro会员",
    display_name: "Wink Pro会员"
  },
  device_type: 1,
  device_type_name: "Wink Pro会员",
  show_renew_flag: false,

  // ✅ Mở khóa toàn bộ tính năng Pro
  features: {
    pro_editing: true,
    export_hd: true,
    remove_watermark: true,
    unlock_filters: true,
    unlock_templates: true,
    unlock_ai_tools: true,
    unlock_background_removal: true,
    unlock_face_beauty: true,
    unlock_batch_edit: true,
    unlock_magic_cut: true,
    unlock_video_export: true,
    unlock_style_transfer: true
  }
};

$done({ body: JSON.stringify(vip) });
