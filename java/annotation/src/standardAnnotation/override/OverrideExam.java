package standardAnnotation.override;

class Parent {
    void parentMethod() { };
}

class Child extends Parent {
    @Override
    void parentMethod() { };
    // 컴파일러가 같은 이름의 메소드가 조상에 있는지 확인하고 없으면 에러메세지를 출력한다.
}

// @Override : 컴파일러에게 오버라이딩하는 메서드임을 알린다.