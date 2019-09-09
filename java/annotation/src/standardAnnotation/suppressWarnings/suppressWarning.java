package standardAnnotation.suppressWarnings;

import java.util.ArrayList;

class NewClass {
    int newField;

    int getNewField() {
        return newField;
    }

    @Deprecated
    int oldField;

    @Deprecated
    int getOldField() {
        return oldField;
    }
}

public class suppressWarning {
    //@SuppressWarnings({"deprecation", "unchecked"});  -> main 메서드 내의 두 경고를 모두 무시함.
    // 메서드에서 동시 지정은 나중에 추가된 코드에 대해서도 경고를 무시할 수 있기 때문에 해당 메소드에만 지정하는 것이 좋다.

    @SuppressWarnings("deprecation") // deprecation 관련 경고 억제
    public static void main(String args[]) {
        NewClass newClass = new NewClass();
        newClass.newField = 2;
        System.out.println(newClass.getNewField());

        newClass.oldField = 10; // @Deprecated 된 대상 사용
        System.out.println(newClass.getOldField());

        @SuppressWarnings("unchecked")
        ArrayList<NewClass> list = new ArrayList(); // 타입을 지정하지 않음
        list.add(newClass);
    }
}
