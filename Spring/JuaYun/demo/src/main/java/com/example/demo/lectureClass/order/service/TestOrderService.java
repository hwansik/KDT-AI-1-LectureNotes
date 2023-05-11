package com.example.demo.lectureClass.order.service;

import com.example.demo.lectureClass.order.controller.form.TestAccountResponseForm;
import com.example.demo.lectureClass.order.controller.form.TestOrderAccountRequestForm;
import com.example.demo.lectureClass.order.controller.form.TestOrderListRequestForm;
import com.example.demo.lectureClass.order.controller.form.TestOrderRequestForm;
import com.example.demo.lectureClass.order.entity.TestOrder;

import java.util.List;

public interface TestOrderService {

    TestOrder order (TestOrderRequestForm requestForm);

    List<TestOrder> orderListForAccount(TestOrderListRequestForm orderListRequestForm);

    List<TestAccountResponseForm> findAllAccountWhoBuyProduct(TestOrderAccountRequestForm requestForm);
}
